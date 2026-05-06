const panelElement = document.querySelectorAll(".panel");
let prevPanel;

panelElement.forEach((panel) => {
  panel.addEventListener("click", (event) => {
    if (prevPanel) {
      prevPanel.classList.remove("open-panel");
    }
    const currentPannel = event.target.closest(".panel");
    prevPanel = currentPannel;
    currentPannel.classList.add("open-panel");
  });
});
