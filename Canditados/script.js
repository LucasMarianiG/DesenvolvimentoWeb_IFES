function verificacao(){
    let nomeInput = document.getElementById('name');
    let idadeInput = document.getElementById('idade');
    let resultadoInput = document.getElementById('resultado');

    let nome = nomeInput.ariaValueMax.trim();
    let idade = parseInt(idadeInput.value.trim());

    let vereador = 18;
    let prefeitoDeputadoJuizPaz = 21;
    let governador = 30;
    let senadorPresidente = 35;

    resultadoInput.innerHTML = `${nome} - ${idade}`
}