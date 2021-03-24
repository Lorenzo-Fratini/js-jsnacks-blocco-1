function logObj(obj){

  for (var key in obj) {

    var value = obj[key];
    console.log(key + ' :', value);
  }
}

function delBtns() {
  var delBtns = $('.delete');

  delBtns.click(function(){

    var delBtn = $(this);
    var thisTr = delBtn.closest('tr');
    
    thisTr.remove();
    
  });
}

function trGen(param1, param2, param3) {
  var stucture = '<tr><td>'
  + param1 + '</td><td>'
  + param2 + '</td><td>'
  + param3 + '</td><td><button class="delete">X</button></td></tr>';

  return stucture;
}