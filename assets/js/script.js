function pintar(id, color = "green") {
  ele = document.querySelector("#" + id);
  ele.style.backgroundColor = color;
}

pintar("ele1");

ele.addEventListener("click", function () {
  // Cambiar el color de fondo a negro
  ele.style.backgroundColor = "yellow";
});
