function logObj(obj){

  for (var key in obj) {

    var value = obj[key];
    console.log(key + ' :', value);
  }
}

function trGen(param1, param2, param3) {
  var stucture = '<tr><td>'
  + param1 + '</td><td>'
  + param2 + '</td><td>'
  + param3 + '</td></tr>';

  return stucture;
}