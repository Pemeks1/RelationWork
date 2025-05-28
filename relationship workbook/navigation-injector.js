document.addEventListener("DOMContentLoaded", function () {
  const nav = document.createElement("div");
  nav.className = "navigation";

  // Determine current filename
  const page = location.pathname.split("/").pop();
  const files = [
    "index.html",
    "introduction.html",
    "engagement-guidelines.html",
    "guiding-exploration.html",
    "measurement-scales.html",
    "communication.html",
    "trust-honesty.html",
    "quality-time.html",
    "conflict-resolution.html",
    "affection-intimacy.html",
    "support-encouragement.html",
    "shared-values-goals.html",
    "forgiveness.html",
    "gratitude-appreciation.html",
    "personal-growth.html",
    "romantic-gestures.html",
    "sexual-compatibility.html",
    "boundaries.html",
    "family-friends.html",
    "fun-adventure.html",
    "section1-summary.html",
    "childhood-blueprint.html",
    "past-relationships.html",
    "body-wisdom.html",
    "core-values.html",
    "section2-summary.html",
    "clear-boundaries.html",
    "navigating-desire.html",
    "transforming-conflict.html",
    "mutual-support.html",
    "section3-summary.html",
    "visioning-future.html",
    "continuous-dance.html",
    "rituals-of-connection.html",
    "section4-summary.html",
    "conclusion.html"
  ];

  const i = files.indexOf(page);

  const home = `<a href="index.html">🏠 Home</a>`;
  const prev = i > 0 ? `<a href="${files[i - 1]}">← Back</a>` : "";
  const next = i < files.length - 1 ? `<a href="${files[i + 1]}">Next →</a>` : "";

  nav.innerHTML = `${prev}${home}${next}`;
  document.querySelector("main")?.appendChild(nav);
});
