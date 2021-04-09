var sum = 0

for(var i=0; i < 10 ; i++){
  var num = parseInt(prompt('Inserisci numero'))
  sum += num
  if(isNaN(num)){
    alert('Number invalid')
    break
  }
}

console.log(sum)