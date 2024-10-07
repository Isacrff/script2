function criaCartao (categoria, pergunta, repostas){
     let container = document.getElementById('container');
     let cartao = document.createElement('article')
     cartao.className = 'cartao';
     cartao.innerHTML = `<div class="conteudo-cartao"> 
     <h3>categoria</h3>
     <p>pergunta</p>
</div>
<div class="conteudo-cartao">
     <p>resposta</p>
</div>`
}