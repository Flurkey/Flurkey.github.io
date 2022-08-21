var size = 5;

function crField() {
  for (let i = 0; i < 100/size; i++) {
    for (let i = 0; i < 100/size; i++) {
      var divField = document.createElement("div");
      divField.style.width = size+"%";
      divField.style.height = size+"%";
      divField.style.background = "black";
      divField.style.cursor = "pointer"
      document.getElementsByClassName("PlayingGround")[0].appendChild(divField);
    }
  }
}
