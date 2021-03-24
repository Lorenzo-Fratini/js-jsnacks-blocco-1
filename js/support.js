function logObj(obj){

  for (var key in obj) {

    var value = obj[key];
    console.log(key + ' :', value);
  }
}