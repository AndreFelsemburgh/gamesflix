
function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.className == 'fechar') {
            modal.classList.remove('mostrar');
        }
    });
}

const exibir = document.querySelector('.botao');
exibir.addEventListener('click', () => iniciaModal('primeira-janela-modal'));



function iniciaJanela(janelaID) {
    const janela = document.getElementById(janelaID);
    janela.classList.add('mostrar');
    janela.addEventListener('click', (e) => {
        if(e.target.id == janelaID || e.target.className == 'fechar') {
            janela.classList.remove('mostrar');
        }
    });
}

const aparecer = document.querySelector('.informacao');
aparecer.addEventListener('click', () => iniciaJanela('segunda-janela-modal'));

