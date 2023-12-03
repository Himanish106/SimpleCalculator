document.addEventListener("DOMContentLoaded", function () {
  const inputElement = document.querySelector(".input-box input");
  const buttons = document.querySelectorAll(".my-button");
  const clearButton = document.querySelector(".set0");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = button.textContent;

      if (buttonText === "=") {
        try {
          inputElement.value = eval(inputElement.value);
        } catch (error) {
          inputElement.value = "Error";
        }
      } else {
        inputElement.value += buttonText;
      }
    });
  });

  clearButton.addEventListener("click", function () {
    inputElement.value = "";
  });
});

// Prevent form submission on pressing Enter
document
  .querySelector(".calculator-elements")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  });
