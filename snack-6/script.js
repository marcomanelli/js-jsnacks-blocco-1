var guest = parseInt(prompt('Inserisci il numero N da uno a 10'))
var somma = 0

for(var i=1; i<=guest; i++){
  somma += Math.pow(i,3)
}

console.log(somma)