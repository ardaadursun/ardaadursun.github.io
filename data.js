// ============================================================
//  Inhalte deiner Seite – hier bearbeiten, kein HTML nötig.
// ============================================================

// Skills: nach Kategorie gruppiert
const SKILLS = [
  { category: "Programmiersprachen", items: ["Java", "Kotlin", "Python", "C", "SQL (Oracle)", "ABAP"] },
  { category: "Web",                 items: ["HTML", "CSS", "JavaScript"] },
  { category: "IT & Administration", items: ["Windows Server", "Active Directory", "PowerShell", "vCloud", "IT-Support"] },
  { category: "Methoden",            items: ["OOP", "Scrum", "Prozessoptimierung", "Datenanalyse (SAS, BI)", "Datenbankmanagement"] },
  { category: "Sprachen",            items: ["Deutsch (Muttersprache)", "Englisch (C1)", "Spanisch (A2)"] },
];

// Projekte: status = "geplant" | "in Arbeit" | "fertig"
// Optional: link (Live-Demo) und repo (GitHub)
const PROJECTS = [
  {
    title: "Portfolio-Website",
    description: "Diese Seite – gebaut mit reinem HTML, CSS und JavaScript, responsiv und mit Dark Mode.",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "fertig",
    repo: "https://github.com/ardaadursun/ardaadursun.github.io",
  },
  {
    title: "Weitere Projekte folgen",
    description: "Neue Projekte sind in Vorbereitung – schau gerne bald wieder vorbei.",
    tags: [],
    status: "geplant",
  },
];

// Werdegang: neuester Eintrag zuerst
const TIMELINE = [
  {
    date: "Feb 2026 – heute",
    title: "Werkstudent IT · RA-MICRO Köln",
    text: "Administration von Windows-Servern und Terminalservern in einer vCloud-Umgebung, Benutzerverwaltung im Active Directory, Automatisierung mit PowerShell sowie Support der Kanzleisoftware.",
  },
  {
    date: "Sep 2024 – heute",
    title: "Studium Wirtschaftsinformatik · TH Köln",
    text: "Schwerpunkt Softwareentwicklung. Dazu Prozessoptimierung, Projektmanagement mit Scrum, Datenanalyse (BI) und relationale Datenbanken (Oracle SQL).",
  },
  {
    date: "Aug 2024 – Mär 2025",
    title: "Zustelllogistik · Deutsche Post / DHL",
    text: "Zuverlässige und pünktliche Arbeit unter Zeitdruck.",
  },
  {
    date: "Aug 2021 – Jun 2024",
    title: "Abitur · Berufskolleg Bergisch Gladbach",
    text: "Kaufmännische Schulen – Grundlage für den Weg in die Wirtschaftsinformatik.",
  },
];
