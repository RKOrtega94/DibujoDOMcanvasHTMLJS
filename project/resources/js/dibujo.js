var d = document.getElementById('dibujo');
var lienzo = d.getContext("2d");
var xini, yini, xfin, yfin;

for (var i = 0; i < 51; i++)
{
  xini = 0 + i*10;
  yfin = 500 - i*10;
  yini = 0 + i*10;
  xfin = 0 + i*10;
  dibujarLinea("red", 0, yini, xfin, 500);
  dibujarLinea("red", 500, yini, xfin, 0);
  dibujarLinea("red", xini, 0, 0, yfin);
  dibujarLinea("red", xini, 500, 500, yfin);
}


function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}
