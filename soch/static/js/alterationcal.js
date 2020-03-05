let calc = document.querySelector("#alterationcal");

let totalqtycal = document.querySelectorAll(`input[id = 'qty']`);

let totalqty = 0;
for (var i = 0; i < qty.length; i++) {
  totalqty += +qty[i].value + +qty[i].value;
}
document.getElementById("totalqty").value = totalqty;
