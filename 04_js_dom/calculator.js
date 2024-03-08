const result = document.querySelector("#result");
const resultBtn = document.querySelector("#resultBtn");
const eraseBtn = document.querySelector("#erase");

resultBtn.addEventListener("click", function () {
  const val1 = parseInt(document.getElementById("val1").value);
  const val2 = parseInt(document.getElementById("val2").value);
  const op = document.getElementById("op").value;
  switch (op) {
    case "+":
      result.value = val1 + val2;
      break;
    case "-":
      result.value = val1 - val2;
      break;
    case "*":
      result.value = val1 * val2;
      break;
    case "/":
      result.value = val1 / val2;
      break;
    case "%":
      result.value = val1 % val2;
      break;
  }
});

eraseBtn.addEventListener("click", () => {
  document.getElementById("val1").value = "";
  document.getElementById("val2").value = "";
  document.getElementById("op").value = "";
  document.getElementById("result").value = "";
});