// Rendert die Inhalte aus data.js und steuert Navigation/Theme.

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// --- Skills ---
document.getElementById("skillsGrid").innerHTML = SKILLS.map(
  (g) => `
  <div class="card skill-group">
    <h3>${esc(g.category)}</h3>
    <ul class="chips">${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
  </div>`
).join("");

// --- Projekte ---
const statusClass = { "fertig": "done", "in Arbeit": "wip", "geplant": "planned" };
document.getElementById("projectsGrid").innerHTML = PROJECTS.map((p) => {
  const links = [
    p.link && `<a href="${esc(p.link)}" target="_blank" rel="noopener">Live ↗</a>`,
    p.repo && `<a href="${esc(p.repo)}" target="_blank" rel="noopener">Code ↗</a>`,
  ].filter(Boolean).join("");
  return `
  <article class="card project ${p.status === "geplant" ? "project--placeholder" : ""}">
    <div class="project__head">
      <h3>${esc(p.title)}</h3>
      <span class="badge badge--${statusClass[p.status] || "planned"}">${esc(p.status)}</span>
    </div>
    <p>${esc(p.description)}</p>
    ${p.tags && p.tags.length ? `<ul class="tags mono">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
    ${links ? `<div class="project__links">${links}</div>` : ""}
  </article>`;
}).join("");

// --- Werdegang ---
document.getElementById("timelineList").innerHTML = TIMELINE.map(
  (e) => `
  <li class="timeline__item">
    <span class="timeline__date mono">${esc(e.date)}</span>
    <h3>${esc(e.title)}</h3>
    <p>${esc(e.text)}</p>
  </li>`
).join("");

// --- Jahr im Footer ---
document.getElementById("year").textContent = new Date().getFullYear();

// --- Theme-Umschalter ---
document.getElementById("themeToggle").addEventListener("click", () => {
  const root = document.documentElement;
  const current = root.dataset.theme ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// --- Mobile-Menü ---
const menuBtn = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const setMenu = (open) => {
  navLinks.classList.toggle("is-open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
};
menuBtn.addEventListener("click", () => setMenu(!navLinks.classList.contains("is-open")));
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

// --- E-Mail kopieren ---
// Ein mailto-Link tut nichts, wenn beim Besucher kein Mail-Programm eingerichtet ist.
// Deshalb: Adresse sichtbar anzeigen + Kopier-Button.
const copyBtn = document.getElementById("copyMail");
const copyHint = document.getElementById("copyHint");
copyBtn.addEventListener("click", async () => {
  const mail = copyBtn.dataset.mail;
  let ok = false;
  try {
    await navigator.clipboard.writeText(mail);
    ok = true;
  } catch (e) {
    // Fallback für ältere Browser / file://
    const ta = document.createElement("textarea");
    ta.value = mail;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { ok = document.execCommand("copy"); } catch (_) {}
    ta.remove();
  }
  copyHint.textContent = ok ? "✓ Kopiert! Einfach in dein Mail-Programm einfügen." : `Bitte manuell kopieren: ${mail}`;
  copyBtn.textContent = ok ? "Kopiert ✓" : "E-Mail-Adresse kopieren";
  setTimeout(() => { copyBtn.textContent = "E-Mail-Adresse kopieren"; }, 2500);
});

// --- Einblenden beim Scrollen ---
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
  }),
  { threshold: 0.1 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
