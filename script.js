(() => {
  const welcome = document.getElementById("welcome");
  const openButton = document.getElementById("openCard");
  // The invitation stays accessible when scripting is unavailable.
  function openInvitation() {
    welcome.classList.add("closed");
    document.body.classList.remove("is-locked");
    setTimeout(() => { welcome.hidden = true; }, 850);
  }
  openButton.addEventListener("click", openInvitation);
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !welcome.hidden) openInvitation(); });
  const sections = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }, { threshold: .08 });
    sections.forEach(section => observer.observe(section));
  } else sections.forEach(section => section.classList.add("visible"));

})();
