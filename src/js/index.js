const modal = document.querySelector('.modal');
const botaoTrailer = document.querySelector('.botao-trailer');
const botaoFecharModal = document.querySelector('.fechar-modal');
const video = document.getElementById('video');
const linkDoVideo = video.src;

function alternarModal() {
	modal.classList.toggle('aberto');
}

botaoTrailer.addEventListener('click', () => {
	video.setAttribute('src', linkDoVideo);
	alternarModal();
});

botaoFecharModal.addEventListener('click', () => {
	video.setAttribute('src', '');
	alternarModal();
});
