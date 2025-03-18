let listaAmigosJs = [];

function adicionarAmigo(){
    let listaRes = document.getElementById("resultado");
    listaRes.innerHTML = '';
    let nomeAmigo = document.querySelector('input').value
    if (nomeAmigo != ''){
        if(listaAmigosJs.includes(nomeAmigo)){
            alert ("Você já adicionou esse nome.");
            limparCampo();
        }else{
        listaAmigosJs.push(nomeAmigo);
        let listaTemp = document.getElementById("listaAmigos");
        let nomeTemp = document.createElement ("li");
        nomeTemp.textContent = nomeAmigo;
        listaTemp.appendChild (nomeTemp);
        limparCampo();
        }
    } else {
        alert ("Por favor, digite um nome válido.");
}
}

function sortearAmigo(){
    let aleatorio = parseInt(Math.random() * listaAmigosJs.length)
    let escolhido = listaAmigosJs[aleatorio];
    let ListaTempo = document.getElementById("listaAmigos");
    ListaTempo.innerHTML = "";
    let resultTemp = document.getElementById("resultado");
    let fraseRes = document.createElement("li");
    fraseRes.textContent = `O amigo secreto sorteado é: ${escolhido}`;
    resultTemp.appendChild (fraseRes);
    listaAmigosJs = [];
}

function limparCampo(){
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}