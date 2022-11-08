const controle = document.querySelectorAll('.controle-ajuste')

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        console.log(evento.target.dataset.controle)
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    })
})

function manipulaDados(operacao, controle){
    const peca = controle.querySelector('.controle-contador')

    if(operacao === '-'){
        peca.value = parseInt(peca.value) - 1;
    }else{
        peca.value = parseInt(peca.value) +1;
    }
}