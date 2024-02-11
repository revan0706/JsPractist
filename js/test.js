let Ax;
let Ay;
let Bx;
let By;
let Cx;
let Cy;

Ax = prompt("A(x)");
Ay = prompt("A(y)");
Bx = prompt("B(x)");
By = prompt("B(y)");
Cx = prompt("C(x)");
Cy = prompt("C(y)");

a = Ax - Bx;
b = Ay - By;
d = a * b;
if (Cy <= By) {
  if (Cy >= Ay) {
    if (Cx >= Ax) {
      if (Cx <= Bx) {
        alert("in");
      } else {
        alert("Out");
      }
    } else {
      alert("Out");
    }
  } else {
    alert("Out");
  }
} else {
  alert("Out");
}
alert(`Area of rectangle is: ${d}`);
