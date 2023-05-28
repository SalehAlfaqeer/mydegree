let inputs = document.getElementById("inupt-degree"),
  select = document.getElementById("degree-type"),
  submit = document.getElementById("submit"),
  result = document.getElementById("result");

submit.addEventListener("click", () => {
  let x;
  if (select.value == "100") {
    if (inputs.value > 5 || inputs.value < 0) {
      alert("Invalid value please enter valid value *_^");
      x = "";
      inputs.value = "";
    } else {
      x = (+inputs.value * 100) / 5;
    }
  } else {
    if (inputs.value > 100 || inputs.value < 0) {
      alert("Invalid value please enter valid value *_^");
      x = "";
      inputs.value = "";
    } else {
      x = (+inputs.value * 5) / 100;
    }
  }
  result.innerHTML = x;
});

select.addEventListener("change", () => {
    inputs.value = "";
    inputs.focus();
    result.innerHTML = "";
});