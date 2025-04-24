// Função para exibir a janela interativa correspondente
function showSection(sectionId) {
    // Esconde todas as janelas
    document.getElementById('janela1').style.display = 'none';
    document.getElementById('janela2').style.display = 'none';
    document.getElementById('janela3').style.display = 'none';

    // Exibe a janela selecionada
    document.getElementById(sectionId).style.display = 'block';
}
// Função para alternar para a tela cheia
function toggleFullScreen(iframeId) {
    const iframe = document.getElementById(iframeId);

    // Verifica se o iframe foi encontrado
    if (!iframe) {
        console.error(`Iframe com ID ${iframeId} não encontrado.`);
        return;
    }

    // Tenta entrar em tela cheia
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari e Opera
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // IE/Edge
        iframe.msRequestFullscreen();
    } else {
        console.warn("O navegador não suporta tela cheia.");
    }
}

// Função para mostrar "Sobre Mim"
function showAbout() {
    const aboutSection = document.getElementById('about');
    const referencesSection = document.getElementById('references');

    // Alterna a exibição da seção "Sobre Mim"
    if (aboutSection.style.display === 'block') {
        aboutSection.style.display = 'none';
    } else {
        aboutSection.style.display = 'block';
        referencesSection.style.display = 'none'; // Esconde referências
    }
}

// Função para mostrar "Referências"
function showReferences() {
    const aboutSection = document.getElementById('about');
    const referencesSection = document.getElementById('references');

    // Alterna a exibição da seção "Referências"
    if (referencesSection.style.display === 'block') {
        referencesSection.style.display = 'none';
    } else {
        referencesSection.style.display = 'block';
        aboutSection.style.display = 'none'; // Esconde sobre mim
    }
}

// Acesso inicial para garantir que não há erros
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o estado das seções como invisível
    document.getElementById('about').style.display = 'none';
    document.getElementById('references').style.display = 'none';
});