function criacartao(categoria, pergunta, resposta) {

    <div class="conteudo-cartao" onclick = "mostraResposta(this)" >
       <h3>${categoria}</h3>
    <div class="pergunta-cartao">
        <p>${pergunta}</p>
    </div>
    <div class="resposta-cartao">
        <p>${resposta}</p>
    </div>
</div >
    `
    (document.getElementById('container')).appendChild(cartao);
}

function mostraResposta (card){
    const resposta = card querySelector('.resposta-cartao');
    if(resposta.style.display === 'none'){
        resposta.style.display = 'block'
    }
    else(
        resposta.style.display = 'none'
    )

}