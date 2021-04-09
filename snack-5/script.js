var list = []

for(var i=0; i<6; i++){
  var num = parseInt(prompt('Inserisci il numero'))
  if(num%2 != 0){
    list.push(num)
  }
}

console.log(list)