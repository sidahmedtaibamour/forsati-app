(() => {
  let saved = "ar";
  try { saved = localStorage.getItem("forsati-lang") || "ar"; } catch { /* ignore */ }
  const show = (l) => {
    if (!document.querySelector(`article[data-l="${l}"]`)) l = "ar";
    document.querySelectorAll("article[data-l]").forEach((a) => { a.hidden = a.dataset.l !== l; });
    document.querySelectorAll(".langs button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.l === l)));
    document.documentElement.lang = l; document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
    document.title = { ar: "سياسة الخصوصية", fr: "Politique de confidentialité", en: "Privacy policy" }[l] + " | FORSATI";
    document.getElementById("back").textContent = l === "ar" ? "→" : "←";
  };
  document.querySelector(".langs").addEventListener("click", (e) => { const b = e.target.closest("[data-l]"); if (b) show(b.dataset.l); });
  show(saved);
})();
