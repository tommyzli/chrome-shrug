const shrug = "¯\\_(ツ)_/¯";

const onInput = (event) => {
  if (event.target.value.indexOf(":shrug:") !== -1) {
    event.target.value = event.target.value.replace(":shrug:", shrug);
  }
};

const inputTags = document.querySelectorAll("input, textarea");
inputTags.forEach((currentValue) => {
  currentValue.addEventListener("input", onInput);
});
