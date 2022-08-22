var size = 5;
var Arr = []
function crField() {
  for (let z = 0; z < 100/size; z++) {
    for (let i = 0; i < 100/size; i++) {
      var divField = document.createElement("div");
      divField.setAttribute("Class", "fieldCard");
      divField.setAttribute("id", z+":"+i);
      divField.setAttribute("mine",false);
      divField.setAttribute("near","0");
      divField.onclick = function () {
        fieldClick(this);
      }
      
      document.getElementsByClassName("PlayingGround")[0].appendChild(divField);
    }
  }
  fieldLink();
}

function fieldLink() {
  var fieldsize = Math.sqrt(document.getElementsByClassName("fieldCard").length)
  Arr = new Array(fieldsize)
  for (var i = 0; i < Arr.length; i++) {
      Arr[i] = new Array(fieldsize);
    }

  var field = document.getElementsByClassName("fieldCard");
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

function crMines(num) {
  var fieldsize = Math.sqrt(document.getElementsByClassName("fieldCard").length)
  for (let i = 0; i < num; i++) {
    var ranCard = Arr[Math.floor(Math.random() * fieldsize)][Math.floor(Math.random() * fieldsize)]
    if(document.getElementById(ranCard).getAttribute("mine") == 'false') {
      document.getElementById(ranCard).setAttribute("mine", true);
    } else {
      console.log(ranCard + " is already a bomb.");
      i--;
    }
  }
}

function crNear() {
  var field = document.getElementsByClassName("fieldCard");
  for (let i = 0; i < field.length; i++) {
    if (document.getElementsByClassName("fieldCard")[i].getAttribute("mine") == 'true') {
      var curLocation = field[i].id.split(":");
      
      for (let _ = -1; _ < 2; _++) {
        for (let k = -1; k < 2; k++) {
          if (Arr[curLocation[0]-_][curLocation[1]-k] != NaN || document.getElementById(curLocation[0]-_+":"+curLocation[1]-k).getAttribute("mine") == "false") {
            document.getElementById(curLocation[0]-_+":"+curLocation[1]-k).getAttribute("near") = parseInt(document.getElementById(curLocation[0]-_+":"+curLocation[1]-k).getAttribute("near")) + 1
          }
        }
      }
    }
  }
}

function showMines() {
  var bombs = 0;
  for (let i = 0; i < document.getElementsByClassName("fieldCard").length; i++) {
    if (document.getElementsByClassName("fieldCard")[i].getAttribute("mine") == 'true') {
      bombs++;
      document.getElementsByClassName("fieldCard")[i].style.background = "red";
    }
  }
}

function fieldClick(btn) {
  console.log(btn);
}
