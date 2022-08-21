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
