// FORSATI collector — Node 20+, no dependencies.
// Runs on GitHub Actions every 6 hours: fetches feeds from sources.json,
// classifies items, extracts deadlines, removes expired items, writes opportunities.json.
import fs from "node:fs/promises";
import crypto from "node:crypto";
import { fileURLToPath, pathToFileURL } from "node:url";

const DIR = fileURLToPath(new URL("./", import.meta.url));
const readJson = async (n, d) => { try { return JSON.parse(await fs.readFile(DIR + n, "utf8")); } catch { return d; } };
const writeJson = (n, o) => fs.writeFile(DIR + n, JSON.stringify(o, null, 1) + "\n");

const DAY = 86400000;
const MAX_NEW_AGE_DAYS = 60;   // ignore feed entries older than this
const MAX_ITEMS = 800;
// When no deadline is found, an item disappears after this many days.
const TTL_DAYS = { jobs: 45, competitions: 30, scholarships: 120, education: 120, training: 60, tools: 180, news: 30 };
const CATS = Object.keys(TTL_DAYS);

/* ---------- text helpers ---------- */
export function norm(s = "") {
  return String(s)
    .normalize("NFD")
    .replace(/[\u0300-\u036f\u064B-\u065F\u0670\u0640]/g, "")
    .replace(/[٠-٩]/g, (d) => d.charCodeAt(0) - 0x660)
    .replace(/[۰-۹]/g, (d) => d.charCodeAt(0) - 0x6f0)
    .replace(/[إٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه")
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}
const ENT = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
const chr = (n) => { try { return String.fromCodePoint(n); } catch { return " "; } };
function decode(s = "") {
  return s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => chr(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => chr(+d))
    .replace(/&([a-z]+);/gi, (m, n) => ENT[n.toLowerCase()] ?? m);
}
const plain = (raw = "") => decode(decode(raw).replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
const cut = (s, n) => (s.length <= n ? s : s.slice(0, n).replace(/\s+\S*$/, "") + "…");

/* ---------- RSS / Atom parser ---------- */
const tagText = (block, name) => {
  const m = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, "i"));
  return m ? m[1] : "";
};
export function parseFeed(xml) {
  const out = [];
  for (const m of xml.matchAll(/<(item|entry)\b[^>]*>([\s\S]*?)<\/\1>/gi)) {
    const b = m[2];
    let link = decode(tagText(b, "link")).trim();
    if (!link) {
      for (const l of b.matchAll(/<link\b([^>]*)>/gi)) {
        const href = l[1].match(/href\s*=\s*["']([^"']+)["']/i);
        const rel = l[1].match(/rel\s*=\s*["']([^"']+)["']/i);
        if (href && (!rel || rel[1] === "alternate")) { link = decode(href[1]); break; }
      }
    }
    if (!link) { const g = decode(tagText(b, "guid")).trim(); if (/^https?:\/\//i.test(g)) link = g; }
    const body = tagText(b, "content:encoded") || tagText(b, "description") || tagText(b, "summary") || tagText(b, "content");
    out.push({
      title: plain(tagText(b, "title")),
      text: plain(body),
      link,
      date: decode(tagText(b, "pubDate") || tagText(b, "published") || tagText(b, "updated") || tagText(b, "dc:date")).trim(),
    });
  }
  return out;
}

/* ---------- HTML page link extractor (for sites without RSS) ---------- */
const SKIP_TITLE = /^(اقرا|اقرأ|read more|lire la suite|plus de|المزيد|المزيد من|تفاصيل)/i;
export function parseLinks(html, baseUrl) {
  const out = [], seen = new Set();
  for (const m of html.matchAll(/<a\b[^>]*?href\s*=\s*["']([^"'#][^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
    let title = plain(m[2]);
    if (!title) { const t = m[0].match(/title\s*=\s*["']([^"']+)["']/i); title = t ? plain(t[1]) : ""; }
    if (title.length < 15 || title.split(" ").length < 3 || SKIP_TITLE.test(title)) continue;
    let link; try { link = new URL(decode(m[1]), baseUrl).href; } catch { continue; }
    if (seen.has(link)) continue;
    seen.add(link);
    out.push({ title, text: "", link, date: "" });
  }
  return out;
}

/* ---------- classification ---------- */
const RULE_WORDS = {
  jobs: ["وظيفه", "وظائف", "توظيف", "مسابقه توظيف", "عروض عمل", "عرض عمل", "فرص عمل", "منصب شغل", "recrut*", "emploi*", "embauche*", "offre d'emploi", "job", "jobs", "hiring", "vacanc*", "career*", "poste a pourvoir", "postes a pourvoir",
    "اساتذه", "استاذ", "اداريين", "اداري", "اعوان", "متصرف", "ملحق اداري", "شبه طبي", "شرطه", "الدرك", "تجنيد", "الجيش الوطني", "الوظيف العمومي", "التحاق بالجيش", "concours de recrutement", "enseignant*", "gendarmerie", "police"],
  education: ["دوره", "دورات", "دوره مجانيه", "تعلم", "كورس", "كورسات", "دروس", "mooc*", "free course*", "online course*", "cours gratuit", "formation en ligne", "certificat*", "certificate*", "tutorial*"],
  scholarships: ["منحه", "منح", "bourse*", "scholarship*", "fellowship*", "grant", "grants", "stipend*", "fully funded"],
  competitions: ["مسابقه", "مسابقات", "جائزه", "جوائز", "جايزه", "concours", "competition*", "contest*", "prize*", "award", "awards", "challenge*", "hackathon*", "olympiad*", "olympiade*"],
  training: ["تربص", "تدريب", "تكوين", "دوره تدريبيه", "stage", "stages", "internship*", "trainee*", "traineeship*", "apprenti*", "training*", "formation professionnelle", "تكوين مهني", "حرفه", "حرفيين", "ورشه", "ورشات", "cfpa", "inpp", "vocational*", "workshop*"],
  news: ["رزنامه", "عطل", "عطله", "نتائج", "قائمه المقبولين", "قائمه الناجحين", "امتحان", "قرار", "بيان", "تعليمه", "منشور وزاري", "اخبار", "calendrier", "vacances", "resultats", "communique", "circulaire", "holiday*", "news"],
  tools: ["اداه مجانيه", "ادوات مجانيه", "موقع مجاني", "تطبيق مجاني", "برنامج مجاني", "free tool*", "outil gratuit", "outils gratuits", "free software", "free app*", "free template*", "logiciel gratuit", "application gratuite"],
};
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const RULES = Object.entries(RULE_WORDS).sort(([a], [b]) => (a === "news") - (b === "news")).map(([cat, words]) => ({
  cat,
  tests: words.map((w) => {
    const word = norm(w.replace(/\*$/, ""));
    if (/[\u0600-\u06FF]/.test(word)) return (t) => t.includes(word);
    const re = w.endsWith("*")
      ? new RegExp(`(^|[^a-z0-9])${esc(word)}`)
      : new RegExp(`(^|[^a-z0-9])${esc(word)}s?([^a-z0-9]|$)`);
    return (t) => re.test(t);
  }),
}));
export function classify(title, text, fallback = "education") {
  const t = norm(title), b = norm(text).slice(0, 700);
  if (/(^|[^a-z0-9])(نتايج|قائمه المقبولين|قائمه الناجحين|resultats|results)/.test(t)) return { category: "news", score: 9 };
  let best = fallback, top = 0;
  for (const { cat, tests } of RULES) {
    const inTitle = tests.filter((f) => f(t)).length;
    const inBody = Math.min(tests.filter((f) => f(b)).length, 2);
    const score = inTitle * 3 + inBody;
    if (score > top) { top = score; best = cat; }
  }
  return { category: top >= 3 ? best : fallback, score: top };
}

/* ---------- cost (free / paid) and "abroad" detection ---------- */
const FREE_RE = /(^|[^a-z])(مجان|بدون رسوم|بلا رسوم|gratuit|free of charge|free course|free training|free online|100% free|sans frais)/;
const PAID_RE = /(برسوم|مدفوع|رسوم التسجيل|بمقابل|payant|frais d'inscription|paid course|paid training|paid program|tuition fee|enrollment fee)/;
export function costOf(title, text, category) {
  if (!["education", "training", "tools"].includes(category)) return null;
  const t = norm(title + " . " + text.slice(0, 700));
  const free = FREE_RE.test(t), paid = PAID_RE.test(t);
  return free && !paid ? "free" : paid && !free ? "paid" : null;
}
const ABROAD_RE = new RegExp([
  "خارج الوطن", "في الخارج", "بالخارج", "للعمل بالخارج", "دول الخليج", "السعوديه", "قطر", "الامارات", "الكويت", "سلطنه عمان", "كندا", "المانيا", "ايطاليا", "اسبانيا", "فرنسا", "اوروبا", "تركيا",
  "abroad", "overseas", "remote", "canada", "germany", "qatar", "saudi", "emirates", "dubai", "europe",
].map(norm).join("|"));
export const isAbroad = (title) => ABROAD_RE.test(norm(title));

/* ---------- countries mentioned in an opportunity ---------- */
const COUNTRY_ALIASES = {
  US: ["united states", "usa", "u.s.a", "etats-unis", "الولايات المتحدة"], CA: ["canada", "كندا"], GB: ["united kingdom", "uk", "royaume-uni", "england", "britain", "المملكة المتحدة", "بريطانيا", "انجلترا"],
  FR: ["france", "فرنسا"], DE: ["germany", "allemagne", "ألمانيا"], IT: ["italy", "italie", "ايطاليا", "إيطاليا"], ES: ["spain", "espagne", "اسبانيا", "إسبانيا"],
  PT: ["portugal", "البرتغال"], NL: ["netherlands", "pays-bas", "holland", "هولندا"], BE: ["belgium", "belgique", "بلجيكا"], CH: ["switzerland", "suisse", "سويسرا"],
  SE: ["sweden", "suede", "السويد"], NO: ["norway", "norvege", "النرويج"], DK: ["denmark", "danemark", "الدنمارك"], FI: ["finland", "finlande", "فنلندا"],
  IE: ["ireland", "irlande", "ايرلندا", "أيرلندا"], AT: ["austria", "autriche", "النمسا"], PL: ["poland", "pologne", "بولندا"], HU: ["hungary", "hongrie", "المجر"],
  CZ: ["czech", "tcheque", "التشيك"], GR: ["greece", "grece", "اليونان"], RO: ["romania", "roumanie", "رومانيا"], RU: ["russia", "russie", "روسيا"],
  UA: ["ukraine", "اوكرانيا", "أوكرانيا"], TR: ["turkey", "turkiye", "turquie", "تركيا"], CN: ["china", "chine", "الصين"], JP: ["japan", "japon", "اليابان"],
  KR: ["south korea", "coree du sud", "كوريا الجنوبية", "كوريا"], IN: ["india", "inde", "الهند"], PK: ["pakistan", "باكستان"], MY: ["malaysia", "malaisie", "ماليزيا"],
  SG: ["singapore", "singapour", "سنغافورة"], ID: ["indonesia", "indonesie", "اندونيسيا", "إندونيسيا"], TH: ["thailand", "thailande", "تايلاند"], VN: ["vietnam", "فيتنام"],
  AU: ["australia", "australie", "استراليا", "أستراليا"], NZ: ["new zealand", "nouvelle-zelande", "نيوزيلندا"], SA: ["saudi arabia", "arabie saoudite", "السعودية"],
  AE: ["united arab emirates", "emirats arabes", "uae", "الامارات", "الإمارات", "دبي"], QA: ["qatar", "قطر"], KW: ["kuwait", "koweit", "الكويت"], BH: ["bahrain", "bahrein", "البحرين"],
  OM: ["oman", "سلطنة عمان"], JO: ["jordan", "jordanie", "الاردن", "الأردن"], LB: ["lebanon", "liban", "لبنان"], EG: ["egypt", "egypte", "مصر"],
  TN: ["tunisia", "tunisie", "تونس"], MA: ["morocco", "maroc", "المغرب"], LY: ["libya", "libye", "ليبيا"], SD: ["sudan", "soudan", "السودان"],
  ZA: ["south africa", "afrique du sud", "جنوب افريقيا", "جنوب أفريقيا"], NG: ["nigeria", "nigeria", "نيجيريا"], KE: ["kenya", "كينيا"], GH: ["ghana", "غانا"],
  ET: ["ethiopia", "ethiopie", "اثيوبيا", "إثيوبيا"], SN: ["senegal", "senegal", "السنغال"], BR: ["brazil", "bresil", "البرازيل"], MX: ["mexico", "mexique", "المكسيك"],
  AR: ["argentina", "argentine", "الارجنتين", "الأرجنتين"], CL: ["chile", "chili", "تشيلي"], CO: ["colombia", "colombie", "كولومبيا"], TW: ["taiwan", "taiwan", "تايوان"],
};
const COUNTRY_TESTS = Object.entries(COUNTRY_ALIASES).map(([code, names]) => ({
  code,
  tests: names.map((n) => {
    const w = norm(n);
    if (/[\u0600-\u06FF]/.test(w)) return (t) => t.includes(w);
    const re = new RegExp(`(^|[^a-z0-9])${esc(w)}([^a-z0-9]|$)`);
    return (t) => re.test(t);
  }),
}));
export function findCountries(text) {
  const t = norm(text);
  return COUNTRY_TESTS.filter(({ tests }) => tests.some((f) => f(t))).map((c) => c.code).slice(0, 4);
}

/* ---------- deadline extraction ---------- */
const MONTHS_RAW = {
  janvier: 1, fevrier: 2, mars: 3, avril: 4, mai: 5, juin: 6, juillet: 7, aout: 8, septembre: 9, octobre: 10, novembre: 11, decembre: 12,
  january: 1, february: 2, march: 3, april: 4, may: 5, june: 6, july: 7, august: 8, september: 9, sept: 9, october: 10, november: 11, december: 12,
  "جانفي": 1, "يناير": 1, "فيفري": 2, "فبراير": 2, "مارس": 3, "أفريل": 4, "إبريل": 4, "ابريل": 4, "افريل": 4, "ماي": 5, "مايو": 5,
  "جوان": 6, "يونيو": 6, "جويلية": 7, "يوليو": 7, "أوت": 8, "اوت": 8, "أغسطس": 8, "اغسطس": 8, "سبتمبر": 9, "أكتوبر": 10, "اكتوبر": 10, "نوفمبر": 11, "ديسمبر": 12,
};
const MONTHS = Object.fromEntries(Object.entries(MONTHS_RAW).map(([k, v]) => [norm(k), v]));
const MALT = Object.keys(MONTHS).sort((a, b) => b.length - a.length).join("|");
const KEY = new RegExp(
  "(?:اخر اجل|اخر اجال|اخر موعد|اخر ميعاد|الاجل|اقصي|اغلاق|ينتهي|الي غايه|غايه|قبل|date limite|avant le|jusqu'au|jusqu au|cloture|deadline|closing date|closes?|apply by|applications? due|until|due)", "g");
const RE_DMY = /(\d{1,2})\s*[\/\-.]\s*(\d{1,2})\s*[\/\-.]\s*(\d{4})/;
const RE_YMD = /(\d{4})\s*-\s*(\d{1,2})\s*-\s*(\d{1,2})/;
const RE_D_MON = new RegExp(`(\\d{1,2})(?:st|nd|rd|th|er)?\\s+(?:de\\s+|of\\s+)?(${MALT})\\s*,?\\s*(\\d{4})?`);
const RE_MON_D = new RegExp(`(${MALT})\\s+(\\d{1,2})(?!\\d)(?:st|nd|rd|th)?\\s*,?\\s*(\\d{4})?`);

function firstDate(seg, today) {
  const cands = [];
  let m;
  if ((m = seg.match(RE_DMY))) cands.push({ i: m.index, d: +m[1], m: +m[2], y: +m[3] });
  if ((m = seg.match(RE_YMD))) cands.push({ i: m.index, y: +m[1], m: +m[2], d: +m[3] });
  if ((m = seg.match(RE_D_MON))) cands.push({ i: m.index, d: +m[1], m: MONTHS[m[2]], y: m[3] ? +m[3] : 0 });
  if ((m = seg.match(RE_MON_D))) cands.push({ i: m.index, m: MONTHS[m[1]], d: +m[2], y: m[3] ? +m[3] : 0 });
  cands.sort((a, b) => a.i - b.i);
  for (const c of cands) {
    if (!(c.m >= 1 && c.m <= 12 && c.d >= 1 && c.d <= 31)) continue;
    let y = c.y;
    if (!y) {
      y = new Date(today).getUTCFullYear();
      if (Date.UTC(y, c.m - 1, c.d) < today - 60 * DAY) y += 1;
    }
    const t = Date.UTC(y, c.m - 1, c.d);
    const dt = new Date(t);
    if (dt.getUTCMonth() !== c.m - 1 || dt.getUTCDate() !== c.d) continue; // e.g. 31 February
    if (t < today - 365 * DAY || t > today + 730 * DAY) continue;
    return dt.toISOString().slice(0, 10);
  }
  return null;
}
export function findDeadline(raw, now = new Date()) {
  const t = norm(raw).slice(0, 6000);
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  for (const k of t.matchAll(KEY)) {
    const from = k.index + k[0].length;
    const d = firstDate(t.slice(from, from + 70), today);
    if (d) return d;
  }
  return null;
}

/* ---------- fetching ---------- */
async function fetchText(url) {
  let last;
  for (let i = 0; i < 2; i++) {
    try {
      const r = await fetch(url, {
        signal: AbortSignal.timeout(20000),
        redirect: "follow",
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; FORSATI-bot/1.0)",
          Accept: "application/rss+xml, application/atom+xml, application/xml;q=0.9, text/xml;q=0.8, */*;q=0.5",
        },
      });
      if (!r.ok) throw new Error("HTTP " + r.status);
      const buf = await r.arrayBuffer();
      if (buf.byteLength > 3_000_000) throw new Error("feed too large");
      return new TextDecoder("utf-8").decode(buf);
    } catch (e) { last = e; }
  }
  throw last;
}
const baseHost = (h) => h.replace(/^www\./, "");
function safeLink(link, src) {
  let u;
  try { u = new URL(link, src.url); } catch { return null; }
  if (u.protocol === "http:") u.protocol = "https:";
  if (u.protocol !== "https:") return null;
  const a = baseHost(u.hostname), b = baseHost(new URL(src.url).hostname);
  const extra = (src.allowHosts || []).map(baseHost);
  const ok = a === b || a.endsWith("." + b) || b.endsWith("." + a) || extra.includes(a);
  if (!ok) return null;
  u.hash = "";
  return u.href;
}
const idOf = (url) => crypto.createHash("sha1").update(url).digest("hex").slice(0, 12);
const titleKey = (t) => norm(t).replace(/[^\p{L}\p{N}]+/gu, " ").slice(0, 80);

/* ---------- main ---------- */
export async function run() {
  const now = new Date();
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const { sources = [] } = await readJson("sources.json", { sources: [] });
  const store = await readJson("opportunities.json", { items: [] });
  const byId = new Map((store.items || []).map((x) => [x.id, x]));
  const titles = new Set([...byId.values()].map((x) => titleKey(x.title)));
  const active = sources.filter((s) => s.active !== false && s.url && CATS.includes(s.category));
  const report = [];

  for (const src of active) {
    const r = { name: src.name, url: src.url, ok: false, fetched: 0, added: 0, error: null };
    try {
      const body = await fetchText(src.url);
      const entries = src.type === "html" ? parseLinks(body, src.url) : parseFeed(body);
      r.ok = true; r.fetched = entries.length;
      if (!entries.length) r.error = "no entries found (is this a valid RSS feed, or a page with links?)";
      for (const e of entries.slice(0, src.type === "html" ? 60 : 40)) {
        const url = e.link && safeLink(e.link, src);
        if (!url || e.title.length < 8) continue;
        let pub = e.date ? new Date(e.date) : null;
        if (!pub || Number.isNaN(pub.getTime()) || pub.getTime() > now.getTime() + DAY) pub = null;
        if (pub && now - pub > MAX_NEW_AGE_DAYS * DAY) continue;
        const id = idOf(url);
        const text = e.text;
        const { category, score } = classify(e.title, text, src.category);
        if ((src.filter ?? src.type === "html") && score === 0) continue;
        const deadline = category === "news" ? null : findDeadline(e.title + " . " + text, now);
        if (byId.has(id)) {
          const old = byId.get(id);
          if (!old.deadline && deadline) old.deadline = deadline;
          continue;
        }
        if (deadline && Date.parse(deadline) < today) continue;      // already expired
        const tk = titleKey(e.title);
        if (titles.has(tk)) continue;                               // duplicate title
        titles.add(tk);
        byId.set(id, {
          id, title: cut(e.title, 200), summary: cut(text, 280), category,
          country: category === "jobs" && isAbroad(e.title) ? "INT" : (src.country || "DZ"),
          cost: costOf(e.title, text, category), countries: category === "news" ? [] : findCountries(e.title + " " + text), lang: src.lang || "ar", source: src.name, url,
          published_at: pub ? pub.toISOString() : null, deadline: deadline || null, first_seen: now.toISOString(),
        });
        r.added++;
      }
    } catch (err) { r.error = String(err.message || err); }
    report.push(r);
  }

  // Re-check old items: calendars, results and decisions belong to News, not to opportunities.
  for (const it of byId.values()) {
    const c = classify(it.title, it.summary || "", it.category);
    if (c.category === "news" && c.score >= 3 && it.category !== "news") { it.category = "news"; it.deadline = null; it.cost = null; }
    if (!Array.isArray(it.countries)) it.countries = it.category === "news" ? [] : findCountries(it.title + " " + (it.summary || ""));
  }

  // Expire: past deadline, or too old when no deadline is known.
  let expired = 0;
  const kept = [];
  for (const it of byId.values()) {
    const ref = Date.parse(it.published_at || it.first_seen || now.toISOString());
    const dead = it.deadline ? Date.parse(it.deadline) < today : now - ref > (TTL_DAYS[it.category] || 60) * DAY;
    if (dead) expired++; else kept.push(it);
  }
  kept.sort((a, b) => Date.parse(b.published_at || b.first_seen) - Date.parse(a.published_at || a.first_seen));
  const items = kept.slice(0, MAX_ITEMS);

  await writeJson("opportunities.json", { updated_at: now.toISOString(), count: items.length, items });
  await writeJson("status.json", {
    checked_at: now.toISOString(), total: items.length, expired_this_run: expired,
    added_this_run: report.reduce((n, r) => n + r.added, 0), sources: report,
  });
  for (const r of report) console.log(`${r.ok ? "OK  " : "FAIL"} ${r.name}: fetched ${r.fetched}, added ${r.added}${r.error ? " — " + r.error : ""}`);
  console.log(`Total ${items.length} items, expired ${expired}.`);
  if (active.length && !report.some((r) => r.ok)) {
    console.error("All sources failed.");
    process.exitCode = 1; // GitHub will email you about the failed run
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await run();
