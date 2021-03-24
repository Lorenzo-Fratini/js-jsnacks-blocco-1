function logObj(obj){

  for (var key in obj) {

    var value = obj[key];
    console.log(key + ' :', value);
  }
}

function newStudent() {

  var name = prompt('Dimmi il tuo nome');
  var surname = prompt('Dimmi il tuo cognome');
  var age = prompt('Dimmi la tua età');

  var newStudent = {

    'name' : name,
    'surname' : surname,
    'age' : age
  };

  return newStudent;
}