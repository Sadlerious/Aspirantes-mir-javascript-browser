const boton = document.querySelector(".boton");
boton.addEventListener("click", function () {
  const input = document.querySelector("#texto");
  const resultado = document.querySelector("#resultado");
  const texto = input.value.toLowerCase();
  const espalindromo = texto.split("").reverse().join("");
  resultado.textContent =
    texto === espalindromo ? "Es palíndromo" : "No es palíndromo";
});
