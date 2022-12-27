const modal = document.querySelector(".modal");
const btnAbrirModal = document.querySelector(".botao-trailer");
const btnfecharModal = document.querySelector(".fechar-modal");
const frameSource = document.getElementById("video");
const linkDoVideo = document.querySelector("#video").src;
const loader = document.querySelector(".carregando");

function alternarModal() {
    modal.classList.toggle("aberto");
}

btnAbrirModal.addEventListener("click", ()=>{
    frameSource.setAttribute("src", linkDoVideo);
    alternarModal();
});

btnfecharModal.addEventListener("click", ()=>{
    frameSource.setAttribute("src", "");
    alternarModal();
});

setTimeout(()=>{
    loader.remove()
},5000)

