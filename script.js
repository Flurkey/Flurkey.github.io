var size = 5%;

var divField = document.createElement("div");
divField.style.width = size;
divField.style.height = size;
divField.style.background = "black";
divField.style.cursor = "pointer"

function crField() {
  for (let i = 0; i > 100/size; i++) {
    for (let i = 0; i > 100/size; i++) {
      document.getElementByClass("PlayingGround").appendChild(divField);
    }
  }
}
