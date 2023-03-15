"use strict";

window.addEventListener("load", initApp);

function initApp() {
  //event listener for select on HTML
  document
    .querySelector("#select-color-mode")
    .addEventListener("change", modeSelected);
  detectUserPreference();
}

// modeSelected called when #select-color-mode changes value (the user select color mode)
function modeSelected() {
  console.log("New color mode selected");
  const selectedColorMode = this.value;
  changeMode(selectedColorMode);
  saveUserColorMode(selectedColorMode);
}

function changeMode(mode) {
  resetColorMode();
  if (mode === "dark") {
    document.body.classList.add("dark-mode");
    console.log("This is dark mode");
  } else if (mode === "yellow") {
    document.body.classList.add("yellow-mode");
    console.log("This is yellow mode");
  } else if (mode === "blue") {
    document.body.classList.add("blue-mode");
    console.log("This is blue mode");
  }
}
function resetColorMode() {
  document.body.className = "";
}

function saveUserColorMode(mode) {
  localStorage.setItem("userColorMode", mode);
}

function readUserColorMode() {
  localStorage.getItem("userColorMode");
  const userColorMode = localStorage.getItem("userColorMode");
  return userColorMode;
}

function detectUserPreference() {}
