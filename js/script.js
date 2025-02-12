const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]')

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento)=>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca)
    })
} )

function manipulaDados(controle, pai){
    const peca = pai.querySelector('[data-contador]');

        if(controle === '-'){
            peca.value = parseInt(peca.value) -1;
        }else{
            peca.value = parseInt(peca.value) +1;
        }
}

function atualizaEstatisticas(peca){

    estatisticas.forEach(elemento => {
        
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

const listaDeCores = document.querySelectorAll('[data-cor]')

listaDeCores.forEach(elemento =>{
    elemento.addEventListener('click', ()=>{
        const cor = elemento.dataset.cor;
        alteraRobo(cor)
    })
})

const srcDaCorDoRobo = document.getElementById('robotron')

function alteraRobo(cor){
    srcDaCorDoRobo.src = "img/Robotron-2000-"+cor+"/Robotron-2000-"+cor+".png"
    
}