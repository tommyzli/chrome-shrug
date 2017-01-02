const onInput = (event)  => {
  if (event.target.value.indexOf(":shrug:") !== -1) {
    event.target.value = event.target.value.replace(":shrug:", "¯\\_(ツ)_/¯");
  }
};

const input_tags = document.querySelectorAll("input, textarea");
input_tags.forEach((currentValue) => {
  currentValue.addEventListener("input", onInput);
});
