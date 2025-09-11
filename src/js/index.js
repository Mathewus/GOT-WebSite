// 1º Passo: Criar contadores para toda vez que o botão for clicado ele incrementar 1 ou subtrair 1

// 2° Passo: Criar função para alternar entre os slides do carrossel

// 3º Passo: Criar função para mudar de personagem assim que clicar nos botões de avançar ou retroceder

// 4º Passo: Quando clicar nos botões além de mudar de personagens, mudar suas descrições

// 5º Passo: Criar função para mudar a exibição das temporadas

// 6º Passo: Criar função para alternar entre as imagens da galeria (mobile e desktop)


let counter = 0; // Contador 1
let counter2 = 1; // Contador 2

// Chamando funções

carrosselSlides()
wallpaperGallery()
showCharacter(counter)
showSeason()


function carrosselSlides() {

    const slidesBanner = document.getElementsByClassName("slides"); // variável que recebe uma coleção (dinâmica) de slides do carrossel
    const botoesCarrossel = document.querySelectorAll(".botao"); // variável que recebe um coleção (estática) dos botões do carrossel


    botoesCarrossel.forEach((botao, indice) => { //Para cada botão do carrossel será adicionado um evento de "click" selecionando o botão e seu "indice"

        botao.addEventListener("click", () => {

            for (let i = 0; i < botoesCarrossel.length; i++) { // enquando i for menor que a quantidade de botões, some i + 1

                botoesCarrossel[i].classList.remove("selecionado"); // removendo a classe "selecionado" de cada botão 
                botoesCarrossel[indice].classList.add("selecionado"); // adicionando a classe "selecionado" no botão correspondente ao indice q foi selecionado

                let slideWidth = 100; // variável que recebe o valor da largura do slide
                let moviment = -indice * slideWidth; // variável que recebe o valor da multiplicação da largura do slide pelo indice do botão que foi selecionado

                slidesBanner[i].style.transform = `translateX(${moviment}%)`; // utilizando a propriedade "transform" e o valor "translateX() para modificar a posição dos slides ". ao clicar nos botões do carrossel o indice do botão selecionado é multiplicado pela largura dos slides e esse resultado é aplicado na função "translateX" movendo assim todos os slides para mesma direção ao mesmo tempo dando o efeito de transição, logo quanto maior o indice maior será a deslocação dos slides.

            }
        })
    })
}

function showCharacter(n) {

    const carrossel = document.getElementById("carrossel-personagens"); // variável que recebe elemento carrossel
    let slides = document.getElementsByClassName("personagens"); // variável que recebe a coleção de slides dos "personagens"
    const section1Fundo = document.getElementById("section1-fundo-mobile"); // variável que recebe seção de fundo mobile
    const primeiroSlide = slides[0]; // variável que recebe o primeiro slide sendo selecionado pela sua posição (índice) na coleção
    const ultimoSlide = slides[4]; // variável que recebe o ultimo slide sendo selecionado pela sua posição (índice) na coleção

    if (n < 0) {

        counter = 0;

        carrossel.insertBefore(ultimoSlide, primeiroSlide); // método insertBefore que serve para adicionar o "último slide" antes do primeiro slide na coleção, ou seja como primeiro filho

        carrossel.classList.remove("movein1"); // removendo a 1º classe de animação do movimento dos slides
        carrossel.classList.remove("movein2"); // removendo a 2º classe de animação do movimento dos slides
        carrossel.offsetWidth; // a propriedade offsetWidth serve para trazer o valor do tamanho real do elemento carrossel de forma dinâmica a medida que o usuário aciona o evento para passar os slides, ela basicamente reseta esse valor, para que a animação seja realizada de forma flexível
        carrossel.classList.add("movein2"); // adicionando a 2º classe de animação do movimento dos slides

    }

    if (n > 1) {

        counter = 1;

        carrossel.appendChild(primeiroSlide); // método appendChild que serve para adicionar o "primeiro slide" depois do último slide na coleção, ou seja como último filho

        carrossel.classList.remove("movein2"); // removendo a 1º classe de animação do movimento dos slides
        carrossel.classList.remove("movein1"); // removendo a 2º classe de animação do movimento dos slides
        carrossel.offsetWidth;
        carrossel.classList.add("movein1"); // adicionando a 1º classe de animação do movimento dos slides
    }

    let moviment = 97 * counter; // variável recebe o valor responsável por controlar o movimento do carrossel, que armazena a largura dos slides dos personagens multiplicado pelo valor do "counter"

    if (innerWidth < 1200) { // se "innerWidth" (largura da viewport) for menor que 1200px "moviment" irá receber um valor referente ao tamanho dos slides dos personagens que serão redimensionados 

        moviment = 86 * counter;
    }

    if (innerWidth < 970) {

        moviment = 65 * counter;
    }

    carrossel.style.transform = `translateY(${-moviment}px)`; // comando responsável por movimentar o carrossel verticalmente usando a propriedade "transform" do style. 

    let tituloPersonagem = document.querySelector(".titulo-personagem") // variável que recebe o titulo do personagem
    let descricaoPersonagem = document.querySelector(".descricao-personagem"); // variável que recebe a descrição do personagem
    let imagemPersonagem = document.querySelector(".imagem-personagem"); // variável que recebe a imagem do personagem
    let idSelecionado = ""; // variável que recebe o id do personagem selecionado
    let tituloSelecionado = ""; // variável que recebe o titulo do personagem selecionado
    let descricaoSelecionada = ""; // variável que recebe a descrição do personagem selecionado
    let slidesMobile = document.querySelectorAll(".personagens"); // variável que recebe cada personagem
    let listaPersonagens = document.getElementById("lista-personagens"); // variável que recebe um container que contem todos os personagens

    if (n < 1) {

        for (let i = 0; i < slides.length; i++) {

            slides[i].classList.remove("selecionado");

        }

        slides[1].classList.add("selecionado");
        idSelecionado = slides[1].attributes.id.value;
        tituloSelecionado = slides[1].getAttribute("data-name");
        descricaoSelecionada = slides[1].getAttribute("data-description");

        tituloPersonagem.innerText = tituloSelecionado;
        descricaoPersonagem.innerText = descricaoSelecionada;
        imagemPersonagem.src = `./src/imagens/${idSelecionado}.png`;
        imagemPersonagem.classList.remove("animation");
        imagemPersonagem.offsetWidth;
        imagemPersonagem.classList.add("animation");
        section1Fundo.src = `./src/imagens/${idSelecionado}_fundo.jpg`

    }

    if (n > 0) {

        for (let i = 0; i < slides.length; i++) {

            slides[i].classList.remove("selecionado");

        }

        slides[2].classList.add("selecionado");
        idSelecionado = slides[2].attributes.id.value;
        tituloSelecionado = slides[2].getAttribute("data-name");
        descricaoSelecionada = slides[2].getAttribute("data-description");

        tituloPersonagem.innerText = tituloSelecionado;
        descricaoPersonagem.innerText = descricaoSelecionada;
        imagemPersonagem.src = `./src/imagens/${idSelecionado}.png`;
        imagemPersonagem.classList.remove("animation");
        imagemPersonagem.offsetWidth;
        imagemPersonagem.classList.add("animation");

        section1Fundo.src = `./src/imagens/${idSelecionado}_fundo.jpg`
    }


    slidesMobile.forEach(slide => {

        slide.addEventListener("click", () => {

            if (innerWidth < 490) {

                for (let i = 0; i < slidesMobile.length; i++) {

                    slidesMobile[i].classList.remove("selecionado");

                }

                slide.classList.add("selecionado");
                idSelecionado = slide.attributes.id.value;
                tituloSelecionado = slide.getAttribute("data-name");
                descricaoSelecionada = slide.getAttribute("data-description");
                tituloPersonagem.innerText = tituloSelecionado;
                descricaoPersonagem.innerText = descricaoSelecionada;
                imagemPersonagem.src = `./src/imagens/${idSelecionado}.png`;
                imagemPersonagem.classList.remove("animation");
                imagemPersonagem.offsetWidth;
                imagemPersonagem.classList.add("animation");
                section1Fundo.src = `./src/imagens/${idSelecionado}_fundo.jpg`

            }
        })
    })


    if (innerWidth < 490) {

        let isScrolling = false;
        let startX;

        listaPersonagens.addEventListener('touchstart', (event) => { // evento responsável para mover os personagens do site usando o touch do smartphone
            isScrolling = true;
            startX = event.touches[0].clientX;
        });

        listaPersonagens.addEventListener('touchmove', (event) => { // evento responsável para mover os personagens do site usando o touch do smartphone
            if (!isScrolling) return;
            const currentX = event.touches[0].clientX;
            const diffX = currentX - startX;
            listaPersonagens.scrollRight += diffX;
            startX = currentX;
        });

        listaPersonagens.addEventListener('touchend', () => { // evento responsável para mover os personagens do site usando o touch do smartphone
            isScrolling = false;
        });
    }
}


function showSeason() {

    const buttonMenu = document.getElementById("button-menu");
    const submenu = document.getElementById("sub-menu");
    let items = document.querySelectorAll(".items");
    const seasons = document.querySelector(".seasons");
    const section2Fundo = document.getElementById("section2-fundo-mobile");
    const seasonTitle = document.querySelector(".titulo-season");;
    const seasonDescription = document.querySelector(".descricao-season");;

    buttonMenu.addEventListener("click", () => {

        submenu.classList.toggle("ativado"); // Ativando e desativando menu através do evento de click no botão

    })

    items.forEach(item => {

        item.addEventListener("click", () => {

            let itemContent = item.textContent;

            for (let i = 0; i < items.length; i++) {

                items[i].classList.remove("selecionado")
            }

            const seasonSelecionada = document.querySelector(".clicado");
            seasonSelecionada.classList.remove("clicado");

            let itemId = item.attributes.id.value;
            let idSeason = `season${itemId}`;
            let season = document.getElementById(idSeason);

            season.classList.add("clicado");
            seasons.textContent = itemContent;
            item.classList.add("selecionado");
            section2Fundo.src = `./src/imagens/${idSeason}_fundo.jpg`;
            seasonTitle.textContent = season.getAttribute("data-name")
            seasonDescription.textContent = season.getAttribute("data-description")
            submenu.classList.toggle("ativado");

        })
    })
}



function showGallery(n) {

    let imagesGallery = document.querySelectorAll(".images"); // variável para armazenar as imagens da galeria

    if (n > 3) {

        counter2 = 0; // se n for maior que 3 counter2 irá receber 0
    }

    if (n < 0) {

        counter2 = 3; // se n for menor que 0 counter2 irá receber 3
    }

    for (let i = 0; i < imagesGallery.length; i++) {

        imagesGallery[i].classList.remove("selecionado"); // removendo a classe "selecionado" de todas as imagens da galeria
    }

    imagesGallery[counter2].classList.add("selecionado"); // adicionando a classe "selecionado" na imagem que está sendo selecionada através do seu indice (posição), que nesse caso é o valor que a variável "counter2"(argumento) estará armazenando a medida que o valor do parâmetro n é atualizado quando a função "showGallery" é chamada.

}


function passCharacter(n) {

    showCharacter(counter += n); // chamando função showCharacter e atribuindo como argumento a variável counter + n e atribuindo essa a soma a counter
}

function passGallery(n) {

    showGallery(counter2 += n); // chamando função showGallery e atribuindo como argumento a variável counter2 + n e atribuindo essa a soma a counter2
}

function wallpaperGallery() {

let body = document.getElementById("corpo");
let imagesMobile = document.querySelectorAll(".images-mobile");
const buttonShare = document.getElementById("gallery-share");
let buttonGrid = document.getElementById("gallery-grid");
let wallpaper = document.querySelector(".wallpaper");
let galleryWallpaper = document.querySelector(".gallery_wallpaper");
let wallpaperTitle = document.querySelector(".wallpaper-info-title")
let wallpaperdescription = document.querySelector(".wallpaper-info-description")

imagesMobile.forEach((imagemobile) => {

    imagemobile.addEventListener("click", () => {

        let idImage = imagemobile.attributes.id.value
        galleryWallpaper.src = `./src/imagens/wallpaper-${idImage}.png`;
        wallpaperTitle.textContent = imagemobile.getAttribute("data-name");
        wallpaperdescription.textContent = imagemobile.getAttribute("data-description");
        wallpaper.classList.add("ativado");
        body.classList.add("overflow");

        buttonShare.addEventListener('click', async () => { // evento de click para acionar a função de compartilhamento de imagens da galeria
            // Verifica se a API de compartilhamento está disponível no navegador
            if (navigator.share) {
                try {
                    // Objeto com as informações que você quer compartilhar

                    // 1. DESABILITA o botão para evitar cliques múltiplos
                    buttonShare.disabled = true;

                    await navigator.share({
                        title: 'Game of Thrones',
                        text: 'Confira esta imagem incrível de Game of Thrones!',
                        url: `./src/imagens/wallpaper-${idImage}.png`,
                    });
                    console.log('Conteúdo compartilhado com sucesso!');
                } catch (error) {
                    console.error('Erro ao compartilhar:', error);
                } finally {
                    // 2. HABILITA o botão novamente, independente do resultado (sucesso ou erro)
                    buttonShare.disabled = false;
                }
            } else {
                // Caso a API não esteja disponível, você pode oferecer uma alternativa
                // Por exemplo, copiar a URL para a área de transferência
                alert('A API de compartilhamento não está disponível neste navegador.');
                // Você pode adicionar um código para copiar a URL aqui
            }
        });
    })
})

window.addEventListener("resize", () => { // evento aplicado toda vez que a janela do navegador (viewport) for redimensionada

    if (window.innerWidth > 490) {

        wallpaper.classList.remove("ativado");
        body.classList.remove("overflow");
    }

})


buttonGrid.addEventListener("click", () => { // evento de click para remover o wallpaper da galeria e remover a rolagem do site

    wallpaper.classList.remove("ativado");
    body.classList.remove("overflow");

})
}

