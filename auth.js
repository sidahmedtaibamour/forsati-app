/* FORSATI accounts — Supabase Auth.
   1) أنشئ مشروعًا مجانيًا في supabase.com
   2) Project Settings → API → انسخ Project URL و anon public key إلى السطرين التاليين.
   مفتاح anon مصمّم ليكون علنيًا؛ الحماية الحقيقية هي سياسات RLS في schema.sql. */
const SUPABASE_URL = "";
const SUPABASE_ANON_KEY = "";

const Auth = (() => {
  let client = null, user = null;
  const subs = [];
  const configured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
  const back = () => location.origin + location.pathname;      // return to this page after OAuth / email links
  const emit = (event) => subs.forEach((f) => { try { f(user, event); } catch (e) { console.error(e); } });

  async function init() {
    if (!configured || !window.supabase) return;
    client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
    });
    client.auth.onAuthStateChange((event, session) => {
      user = session?.user ?? null;
      emit(event);
    });
    const { data } = await client.auth.getSession();
    user = data.session?.user ?? null;
    emit("INITIAL");
  }
  const need = () => { if (!client) throw new Error("not-configured"); return client; };
  const ok = ({ error }) => { if (error) throw error; };

  return {
    configured,
    init,
    get user() { return user; },
    get client() { return client; },
    onChange: (f) => subs.push(f),
    signIn: async (email, password) => ok(await need().auth.signInWithPassword({ email, password })),
    signUp: async (email, password) => {
      const r = await need().auth.signUp({ email, password, options: { emailRedirectTo: back() } });
      ok(r);
      return { needsConfirm: !r.data.session };
    },
    google: async () => ok(await need().auth.signInWithOAuth({ provider: "google", options: { redirectTo: back() } })),
    linkGoogle: async () => ok(await need().auth.linkIdentity({ provider: "google", options: { redirectTo: back() } })),
    reset: async (email) => ok(await need().auth.resetPasswordForEmail(email, { redirectTo: back() })),
    setPassword: async (password) => ok(await need().auth.updateUser({ password })),
    signOut: async () => ok(await need().auth.signOut()),
  };
})();
window.Auth = Auth;
