var pippo = 0
var sum = 0

for(var i=0; i < 10 ; i++){
  pippo = parseInt(prompt('Inserisci numero'))
  sum = sum + pippo
  if(isNaN(pippo)){
    alert('Number invalid')
    break
  }
}

console.log(sum)