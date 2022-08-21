var size = 5;

function crField() {
  for (let z = 0; z < 100/size; z++) {
    for (let i = 0; i < 100/size; i++) {
      var divField = document.createElement("div");
      divField.setAttribute("Class", "fieldCard");
      divField.setAttribute("id", z+":"+i);
      document.getElementsByClassName("PlayingGround")[0].appendChild(divField);
    }
  }
}

function mines() {
  var fieldsize = Math.sqrt(document.getElementsByClassName("fieldCard").length)
  var Arr = new Array(fieldsize)
  for (var i = 0; i < Arr.length; i++) {
      Arr[i] = new Array(fieldsize);
    }

  var field = document.getElementsByClassName("fieldCard")
  var col = 0;
  var row = 0;

  for (let i = 0; i < field.length; i++) {
    Arr[row][col] = field[i].id
    if(col < fieldsize-1) {
        col++
    } else {
        col = 0;
        row++;
    }
  }
}
