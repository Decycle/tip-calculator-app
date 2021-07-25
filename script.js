const tipButtons = document.querySelectorAll("[data-tip]");

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tipButtons.forEach((otherButton) => {
      otherButton.classList.remove("selected");
    });
    button.classList.add("selected");
  });
});
