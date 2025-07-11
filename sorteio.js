const meuButao = document.querySelector("button");
const text = document.querySelector("h2");
function cliqueiNoBotao() {
  const menorNumero = Math.ceil(document.querySelector(".menor").value);
  const maiorNumero = Math.floor(document.querySelector(".maior").value);
  const result =
    Math.floor(Math.random() * (maiorNumero - menorNumero + 1)) + menorNumero;
  document.querySelector("h2").style.color = "lime";

  text.innerHTML = result;
}
meuButao.addEventListener("click", cliqueiNoBotao);
