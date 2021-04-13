var lista = []
var somma = 0
var conta = 0

for(var i = 0; i < 10; i++){
  lista.push(parseInt(prompt('Inserisci un numero')))

  somma += lista[i]

  conta++
}

console.log(somma)
console.log(somma / conta)