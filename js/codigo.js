function calcularImc(){

var formulario = document.getElementById("formulario");

var kilos = +formulario.kilos.value; 
var metros = +formulario.metros.value; 
var centimetros = +formulario.centimetros.value; 

var altura = (metros * 100 + centimetros)/100;
var imc = kilos /(altura*altura);

 formulario.imc.value= imc.toFixed(2);
 
 if(imc <= 20){
 
    alert("abaixo do peso");
 
 }else if(imc >20 && imc <= 25){
 
formulario.imc.value = imc.toFixed(2) + "  Peso ideal ";
 
 
 }else if(imc > 25 && imc <= 30){
 
 alert("Sobre Peso ");
 
 }else if (imc > 30 && imc <= 35 ){
 
 alert("obesidade moderada");
 
 }else if (imc > 35 && imc <= 40 ){
 
 alert("obesidade severa");
 
 }else if (imc > 40 && imc <= 50 ){
 
 alert("obesidade morbida");
 
 }else {
 
 alert("gorda pra caraio");
 
 }
 
 
 
 
 
}