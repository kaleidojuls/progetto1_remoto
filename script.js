const titolo = document.getElementById("titolo");
const buttonInvia = document.getElementById("invia").addEventListener("click", onInviaNome);
function onInviaNome() {
    const nomeValue = document.getElementById("nome").value;
    titolo.innerText = `Ciao ${nomeValue}!`;
}