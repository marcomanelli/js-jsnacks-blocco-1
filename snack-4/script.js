var name = prompt('Inserisci il tuo nome:')

var list = ['luca', 'mario', 'giada', 'enrico', 'simone']

var confirmed = false

for (var i=0; i<list.length; i++){
  if (name == list[i]){
    confirmed = true
    break
  }
}

alert(confirmed? 'Puoi partecipare':'NON puoi partecipare')