var canPredict = true;
var static, c = 0;
function predecir() {
  canPredict = false;
  document.getElementById("predictionResult").innerHTML = "";
  let xer = [3.8, 1.17, 2.09, 3.84, 1.33, 10.47, 1.37, 2.17, 5.41, 6.14, 1.14, 3.8, 1.35, 2.34, 3.23, 1.43, 1.82, 1.99];
  var num = xer[c];
  setTimeout(function() {
    document.getElementById("predictionResult").innerHTML = num.toFixed(2) + "x";
  });
  c++;
    if (c >= xer.length - 1){
      c=0;
    }
  var i = 0;
  var interval = setInterval(function() {
    if (i >= num * 100) {
      clearInterval(interval);
    } else {
      i+=1;
      document.getElementById("predictionResult").innerHTML = (i / 100).toFixed(2) + "x";
    }
  });
}


// Agregamos estilo para la alerta
var estiloAlerta = document.createElement("style");
estiloAlerta.innerHTML = ".alerta { background-color: #F4D03F; color: #000; font-size: 1.5em; font-weight: bold; padding: 20px; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 9999; border: 4px solid #FF4136; border-radius: 10px; box-shadow: 5px 5px 15px #FF4136; text-align: center; font-family: 'Open Sans', sans-serif; }";
document.head.appendChild(estiloAlerta);
