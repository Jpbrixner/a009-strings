//Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas

const nomeDoUsuario = prompt("Qual é o seu nome?")
const Comida1 = prompt("Qual é a sua comida preferida?")
const Comida2 = prompt("Qual é a sua segunda comida preferida?")
const Comida3 = prompt("Qual é a sua terceira comida preferida?")

//Em seguida, Imprima no console a seguinte mensagem:
/* Estas são as comidas favoritas de nomeDoUsuario
- Comida1
- Comida2
- Comida3 */

console.log(`Estas são as comidas favoritas de ${nomeDoUsuario}\n-${Comida1}\n-${Comida2}\n-${Comida3}`)