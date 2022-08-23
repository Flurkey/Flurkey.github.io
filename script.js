var size = 5;
var Arr = []
function crField() {
  for (let z = 0; z < 100/size; z++) {
    for (let i = 0; i < 100/size; i++) {
      var divField = document.createElement("div");
      divField.setAttribute("Class", "fieldCard");
      divField.setAttribute("id", z+":"+i);
      divField.setAttribute("mine",false);
      divField.setAttribute("clicked",false);
      divField.setAttribute("flagged",false);
      divField.setAttribute("near","0");
      
      divField.onclick = function () {
        fieldClick(this);
      }
      
      divField.oncontextmenu = function () {
        flag(this);
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
  crMines(90);
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
  crNear();
}

function crNear() {
  var field = document.getElementsByClassName("fieldCard");
  for (let i = 0; i < field.length; i++) {
    if (document.getElementsByClassName("fieldCard")[i].getAttribute("mine") == 'true') {
      var curLocation = field[i].id.split(":");
      for (let _ = -1; _ < 2; _++) {
        for (let k = -1; k < 2; k++) {
            var x = parseInt(curLocation[0])+_;
            var y = parseInt(curLocation[1])+k;
          if (document.getElementById(x+":"+y) != null && document.getElementById(x+":"+y).getAttribute("mine") == "false") {
            document.getElementById(x+":"+y).setAttribute("near",parseInt(document.getElementById(x+":"+y).getAttribute("near")) + 1);
          }
        }
      }
    }
  }
}

function showMines() {
  for (let i = 0; i < document.getElementsByClassName("fieldCard").length; i++) {
    if (document.getElementsByClassName("fieldCard")[i].getAttribute("mine") == 'true') {
      document.getElementsByClassName("fieldCard")[i].style.background = "red";
    }
  }
}

function fieldClick(btn) {
  if (btn != null) {
    if (btn.getAttribute("flagged") == "false" || btn.getAttribute("mine") == "false") {{
      showNum(btn);
      if (btn.getAttribute("near") == 0) {
        var curLocation = btn.id.split(":");
        for (let _ = -1; _ < 2; _++) {
          for (let k = -1; k < 2; k++) {
            var x = parseInt(curLocation[0])+_;
            var y = parseInt(curLocation[1])+k;
            if (document.getElementById(x+":"+y) != null) {
              if(parseInt(document.getElementById(x+":"+y).getAttribute("near")) == 0) {
                fieldClick(document.getElementById(x+":"+y));
              } else {
                //document.getElementById(x+":"+y).setAttribute("clicked", true);
                showNum(document.getElementById(x+":"+y));
              }
            }
          }
        }
      }
    } else if (btn.getAttribute("mine") == "true") {
      showMines()
    }
  }
}

function showNum(btn) {
  btn.innerHTML = btn.getAttribute("near");
  btn.style.background = "dimgray";
}

function flag(btn) {
  if (btn.getAttribute("clicked") == "false") {
    if (btn.getAttribute("flagged") == "false") {
      btn.setAttribute("flagged", true)
      btn.style.background = "repeating-linear-gradient(45deg, #4caf50, transparent 100px)"
    } else {
      btn.setAttribute("flagged", false)
      btn.style.background = "gray"
    }
  }
}
