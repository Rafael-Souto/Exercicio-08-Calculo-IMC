// Monte	um	programa	que	calcule	o	IMC	(Índice	de	Massa	Corporal)	de	uma	pessoa.	Deve	ser	fornecido	como	entrada	o	peso	em	kg,	a	altura	em	metros	e	o	sexo.	Como	saída,	deve ser	exibido	o	IMC	e	mostrar	em	qual	faixa	de	risco	a	pessoa	se	encontra.

var peso, altura, sexo, imc;

// Mensagem de início do programa
alert("CÁLCULO DE IMC")
alert(" ")

// Entrada de dados do usuário
peso = parseFloat(prompt("Informe o peso (kg): "))
altura = parseFloat(prompt("Informe a altura (m) "))
sexo = prompt("Informe o sexo (m/f) ")

// Cálculo do IMC
  imc = peso / (altura * altura)

// Condição para garantir que seja digitado os dados corretamentes
if(sexo != 'm' && sexo != 'f'){
  alert('Dado inválido! ')
}
  else {
// Condições para saber em que faixa de IMC o usuário está
// Parâmetro masculino 
  alert("Seu IMC é: " + imc.toFixed(1))}
  if(sexo == 'm'){
    if(imc < 20){
      alert('Você está abaixo do peso normal. ')
    }
    else if(imc < 25){
      alert('Parabéns! Você está no peso ideal. ')
    }
    else if(imc < 30){
      alert('Você está com obesidade grau I. (leve) ')
    }
    else if(imc < 40){
      alert('Você está com obesidade grau II (severa). ')
    }
    else {
    alert('Você está com obesidade grau III (mórbida). ')
    }
  }

// Parâmetro feminino
  if(sexo == 'f'){
    if (imc < 19) {
      alert('Você está abaixo do peso normal. ')
    }
    else if (imc < 24) {
      alert('Parabéns! Você está no peso ideal. ')
    }
    else if (imc < 29) {
      alert('Você está com obesidade grau I. (leve) ')
    }
    else if (imc < 39) {
      alert('Você está com obesidade grau II (severa). ')
    }
    else {
    alert('Você está com obesidade grau III (mórbida). ')
    }
  }  