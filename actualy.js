const links = document.querySelectorAll(".menu-list a")

function linkAtivo(link){
    const url = location.href
    const href = link.href

    if(url.includes(href)){
        link.classList.add("ativado")
    }
}

links.forEach(linkAtivo)


const parametros = new URLSearchParams(location.search)

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro)
    if(elemento){
        elemento.checked = true 
    }
}

parametros.forEach(ativarProduto)




const perguntas = document.querySelectorAll(".seguro-perguntas-container button")

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativacao")
    const ativados = resposta.classList.contains("ativacao")
    pergunta.setAttribute("aria-expanded", ativados)
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventosPerguntas)




const galeria = document.querySelectorAll(".bicicleta img");
const galeriaContainer = document.querySelector(".bicicleta")

function trocarImagem(event) {
    const img = event.currentTarget
    const tela = window.matchMedia("(min-width:1000px)").matches

    if (tela) {
        galeriaContainer.prepend(img)
        
    }
   
}

function eventoGaleria(img) {
    img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventoGaleria)


if(window.SimpleAnime){
    new 
    SimpleAnime()

}