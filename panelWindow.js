const panelElement = document.querySelectorAll(".panel");
let prevPanel;

panelElement.forEach((panel) => {
  panel.addEventListener("click", (event) => {
    if (prevPanel) {
      prevPanel.classList.toggle("open-panel");
    }
    const currentPannel = event.target.closest(".panel");
    prevPanel = currentPannel;
    currentPannel.classList.toggle("open-panel");
  });
});
