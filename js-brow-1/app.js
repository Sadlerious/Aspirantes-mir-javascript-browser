let boton = document.querySelector(".btn");
boton.addEventListener("click", function () {
  const input = document.querySelector("#texto");
  const resultado = document.querySelector("#resultado");
  const texto = input.value.toUpperCase();
  resultado.textContent = texto;
});
