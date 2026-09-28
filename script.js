// Small progressive enhancement: mark the current year automatically.
document.querySelectorAll(".copy").forEach((el) => {
  el.textContent = el.textContent.replace("2026", new Date().getFullYear());
});

// Close navigation focus naturally after selecting an in-page section.
document.querySelectorAll('.nav-links a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    document.activeElement?.blur();
  });
});
