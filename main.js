var add = document.getElementById("op_plus");
var sub = document.getElementById("op_minus");
var mult = document.getElementById("op_time");
var div = document.getElementById("op_by");
var eq = document.getElementById("op_equal");
var display = document.getElementById("result");
var operand_1, operand_2, operator;

add.addEventListener("click", function () {
  document.getElementById("flt_dot").disabled = false;
  if (!operand_1 && !operand_2) {
    operand_1 = parseFloat(display.value);
    display.value = "";
    operator = 1;
    console.log(operand_1);
  }
});

sub.addEventListener("click", function () {
  document.getElementById("flt_dot").disabled = false;
  if (!operand_1 && !operand_2) {
    operand_1 = parseFloat(display.value);
    display.value = "";
    operator = 2;
  }
});

mult.addEventListener("click", function () {
  document.getElementById("flt_dot").disabled = false;
  if (!operand_1 && !operand_2) {
    operand_1 = parseFloat(display.value);
    display.value = "";
    operator = 3;
  }
});

div.addEventListener("click", function () {
  document.getElementById("flt_dot").disabled = false;
  if (!operand_1 && !operand_2) {
    operand_1 = parseFloat(display.value);
    display.value = "";
    operator = 4;
  }
});

eq.addEventListener("click", function () {
  operand_2 = parseFloat(display.value);
  document.getElementById("flt_dot").disabled = false;

  switch (operator) {
    case 1:
      display.value = operand_1 + operand_2;
      operand_1 = 0;
      operand_2 = 0;
      break;
    case 2:
      display.value = operand_1 - operand_2;
      operand_1 = 0;
      operand_2 = 0;
      break;
    case 3:
      display.value = operand_1 * operand_2;
      operand_1 = 0;
      operand_2 = 0;
      break;
    case 4:
      display.value = operand_1 / operand_2;
      operand_1 = 0;
      operand_2 = 0;
      break;
    default:
      break;
  }
});

function clearBoard() {
  display.value = "";
  document.getElementById("flt_dot").disabled = false;

  operand_1 = 0;
  operand_2 = 0;
}
function update(value) {
  if (value === ".") document.getElementById("flt_dot").disabled = true;
  document.getElementById("result").value += value;
}
