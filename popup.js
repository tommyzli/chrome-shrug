$(document).ready(() => {
  const button = document.querySelector("button");
  button.addEventListener("click", (event) => {
    const copyArea = document.querySelector("#copy");
    copyArea.select();
    document.execCommand("copy");
    copyArea.blur();
    document.querySelector("button").textContent = "Copied successfully.";
 });
});
