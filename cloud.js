// Connects the public site to Firebase: loads the owner's menu and notice,
// and counts visits and clicks on "Réserver" / "Appeler" (no personal data).
const CFG = window.LC_FIREBASE;
const SDK = "https://www.gstatic.com/firebasejs/10.12.2/";

const parisDay = () => new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Paris" }).format(new Date());

async function start() {
  const { initializeApp } = await import(SDK + "firebase-app.js");
  const fs = await import(SDK + "firebase-firestore-lite.js");
  const db = fs.getFirestore(initializeApp(CFG));

  fs.getDoc(fs.doc(db, "site", "menu")).then(s => {
    const m = s.exists() && s.data().sections;
    if (Array.isArray(m) && m.length) window.LC.setMenu(m);
  }).catch(() => {});
  fs.getDoc(fs.doc(db, "site", "info")).then(s => {
    if (s.exists()) window.LC.setNotice(s.data());
  }).catch(() => {});

  const day = parisDay();
  const bump = fields => fs.setDoc(fs.doc(db, "stats", day),
    Object.fromEntries(Object.entries(fields).map(([k, v]) => [k, fs.increment(v)])), { merge: true }).catch(() => {});

  let firstToday = false;
  try { const k = "lc-seen-" + day; if (!localStorage.getItem(k)) { firstToday = true; localStorage.setItem(k, "1"); } } catch (e) {}
  let isOwner = false;
  try { isOwner = localStorage.getItem("lc-owner") === "1"; } catch (e) {}
  if (isOwner) return; // the owner's own visits are not counted

  bump(firstToday ? { views: 1, visitors: 1 } : { views: 1 });
  document.addEventListener("click", e => {
    const a = e.target.closest("a[href]");
    if (!a) return;
    if (a.href.includes("thefork.")) bump({ book: 1 });
    else if (a.href.startsWith("tel:")) bump({ call: 1 });
  }, true);
}

if (CFG) start().catch(() => {});
