function criarCartão(categoria, pergunta,   resposta) {
let container = document.getElementById('container')
let cartao = document.createElement('article')
cartao.className = 'cartao'
cartao.innerHTML = 
 <div class="cartao_conteudo">
                    <h3> Game Hades  <h3>
                            <div class="cartao_conteudo_pergunta">
                                <p> Quem é o pai de Zagreus?  </p>
                            </div>
                            <div class="cartao_conteudo_pergunta">
                                <p> Hades<p>
                            </div>
                </div>


}