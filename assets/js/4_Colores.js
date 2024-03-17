function Pintar(elementId, color = "black") {
  elemento = document.querySelector("#" + elementId);
  elemento.style.backgroundColor = color;
}

Pintar("C_1", "blue");
Pintar("C_2", "red");
Pintar("C_3", "green");
Pintar("C_4", "yellow");

btn = document.querySelector("#C_4");
btn.addEventListener("click", function () {
  // Cambiar el color de fondo a negro
  btn.style.backgroundColor = "black";
});

Pintar("key", "white");
ele = document.querySelector("#key");
ele.style.border = "solid";

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    Pintar("key", "pink");
  } else if (event.key === "s") {
    Pintar("key", "orange");
  } else if (event.key === "d") {
    Pintar("key", "skyblue");
  }
});

document.addEventListener("keydown", function (event_) {
  if (event_.key === "q") {
    var div = document.createElement("div");
    div.style.width = "200px";
    div.style.height = "200px";
    div.id = "miDiv";
    document.body.appendChild(div);
    Pintar("miDiv", "purple");
  } else if (event_.key === "w") {
    var div2 = document.createElement("div");
    div2.style.width = "200px";
    div2.style.height = "200px";
    div2.id = "miDiv2";
    document.body.appendChild(div2);
    Pintar("miDiv2", "grey");
  } else if (event_.key === "e") {
    var div3 = document.createElement("div");
    div3.style.width = "200px";
    div3.style.height = "200px";
    div3.id = "miDiv3";
    document.body.appendChild(div3);
    Pintar("miDiv3", "brown");
  }
});
