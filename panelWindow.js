const panelElement = document.querySelectorAll(".panel");
let prevPanel;
let prevSpan;

panelElement.forEach((panel) => {
  panel.addEventListener("click", (event) => {
    if (prevPanel) {
      prevPanel.classList.remove("open-panel");
      prevPanel.style.setProperty("--bg-color", "rgba(0, 0, 0, 0");
      prevSpan.forEach((span) => {
        span.style.removeProperty("transform");
      });
    }
    const currentPannel = event.target.closest(".panel");
    currentPannel.style.setProperty("--bg-color", "rgba(0, 0, 0, 0.5)");
    prevPanel = currentPannel;
    currentPannel.classList.add("open-panel");

    const spanChildEl = panel.querySelectorAll("span:nth-child(odd)");
    prevSpan = spanChildEl;

    spanChildEl.forEach((span) => {
      span.style.setProperty("transform", "initial");
    });
  });
});
