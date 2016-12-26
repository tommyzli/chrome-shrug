function onInput(event) {
  if (event.target.value.indexOf(":shrug:") !== -1) {
    event.target.value = event.target.value.replace(":shrug:", "¯\\_(ツ)_/¯")
  }
}

var input_tags = document.querySelectorAll("input, textarea");
input_tags.forEach(function (currentValue, index, arr) {
  currentValue.addEventListener("input", onInput);
});