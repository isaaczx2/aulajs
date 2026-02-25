document.write( "<h2>entrada de dados</h2>");

var numero1 = prompt("digite o numero1");
var numero2 =prompt("digite o numero2");

document.write("numero 1 = " + numero1 +"<br>");
document.write( " numero2 = " + numero2 + "<br>");


document.write("<h2>operaçoes aritmetricas</h2>");
var resultado;

resultado = Number(numero1) + Number(numero2);
document.write("a soma dos numeros é " + resultado + "<br/>");

resultado = Number(numero1) - Number(numero2);
document.write("a diferença entre os numeros é " + resultado + "<br/>");


resultado = Number(numero1) * Number(numero2);
document.write("o produto dos numeros é " + resultado + "<br/>");


resultado = Number(numero1) / Number(numero2);
document.write("a divisao entre os numeros é " + resultado + "<br/>");





