/* 1- Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador. */

//alert('Hello World!');

/*2- Crie um script que declare duas variáveis e exiba o resultado da soma entre elas. */

let number1 = prompt("Digite o primeiro numero!")
let number2 = prompt("Digite o segundo numero! ")

number1 = Number(number1)
number2 = Number(number2)

function sumNumbers(number1, number2) {
  total = number1 + number2
  alert(`a soma dos números ${number1} + ${number2} é igual a: ${total}`)
}
sumNumbers(number1, number2)

/*3- Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".*/
let number3 = 12
console.log(typeof number3)

function verifyNumber(number3) {
  if (typeof number3 === "number") {
    alert(`${number3} é um número!`)
  } else {
    alert(`${number3}, não é um numero`)
  }
}

verifyNumber(number3)

/*4- Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string". */

let stringTxt = "12e"
console.log(typeof stringTxt)

function verifyString(stringTxt) {
  if (typeof stringTxt === "string") {
    alert(`${stringTxt} é uma string!`)
  } else {
    alert(`${stringTxt}, não é uma string`)
  }
}

verifyString(stringTxt)

/*5- Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano". */

let booleanoB = true
console.log(typeof booleanoB)

function verifyBoolean(booleanoB) {
  if (typeof booleanoB === "boolean") {
    alert(`${booleanoB} é um booleano!`)
  } else {
    alert(`${booleanoB}, não é um booleano`)
  }
}

verifyBoolean(booleanoB)

/*
6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
*/

let firstN = 10
let secondN = 4

mul = firstN * secondN
sub = firstN - secondN
div = firstN / secondN

alert(
  `o total da multiplicação é ${mul}, o da subtração é ${sub} e o da divisão é ${div}, dos números ${firstN} e ${secondN}`
)

/*
9- Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".


10- Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar". */


function verifyPar(number1) {
  vPar = number1 % 2
  console.log(typeof vPar)
  if (vPar == 0) {
    alert(`${number1} é par!`)
  } else {
    alert(`${number1} é impar!`)
  }
}

verifyPar(number1);

