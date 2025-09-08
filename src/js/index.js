// 1º Passo: Criar um contador para toda vez que o botão for clicado ele incrementar 1 ou subtrair 1

// 2º Passo: Criar uma função para mudar de personagem assim que clicar nos botões de avançar ou retroceder

// 3º Passo: Quando clicar nos botões além de mudar de personagens, mudar suas descrições


let counter = 0;
let counter2 = 1;


carroselSlides()
wallpaperGallery()
showCharacter(counter)
showSeason()


function carroselSlides() {

    const slidesBanner = document.getElementsByClassName("slides");
    const botoesCarrosel = document.querySelectorAll(".botao");

    botoesCarrosel.forEach((botao, indice) => {

        botao.addEventListener("click", () => {

            for (let i = 0; i < botoesCarrosel.length; i++) {

                botoesCarrosel[i].classList.remove("selecionado");
                botoesCarrosel[indice].classList.add("selecionado");

                let slideWidth = 100;
                let moviment = -indice * slideWidth;

                slidesBanner[i].style.transform = `translateX(${moviment}%)`;

            }

        })

    })

}

function showCharacter(n) {

    const carrossel = document.getElementById("carrossel-personagens");
    let slides = document.getElementsByClassName("personagens");
    const section1Fundo = document.getElementById("section1-fundo-mobile");
    const primeiroSlide = slides[0];
    const ultimoSlide = slides[4];


    if (n < 0) {

        counter = 0;

        carrossel.insertBefore(ultimoSlide, primeiroSlide);

        carrossel.classList.remove("movein1"); // Removendo a 1º classe de animação do movimento dos slides
        carrossel.classList.remove("movein2"); // Removendo a 2º classe de animação do movimento dos slides
        carrossel.offsetWidth;
        carrossel.classList.add("movein2");

    }

    if (n > 1) {

        counter = 1;

        carrossel.appendChild(primeiroSlide);

        carrossel.classList.remove("movein2"); // Removendo a 1º classe de animação do movimento dos slides
        carrossel.classList.remove("movein1"); // Removendo a 2º classe de animação do movimento dos slides
        carrossel.offsetWidth;
        carrossel.classList.add("movein1");
    }


    let moviment = 97 * counter;


    if (innerWidth < 1200) {

        moviment = 86 * counter;

    }

    if (innerWidth < 970) {

        moviment = 65 * counter;

    }

    carrossel.style.transform = `translateY(${-moviment}px)`;


    let tituloPersonagem = document.querySelector(".titulo-personagem")
    let descricaoPersonagem = document.querySelector(".descricao-personagem");
    let imagemPersonagem = document.querySelector(".imagem-personagem");
    let idSelecionado = "";
    let tituloSelecionado = "";
    let descricaoSelecionada = "";
    let slidesMobile = document.querySelectorAll(".personagens");
    let listaPersonagens = document.getElementById("lista-personagens");

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

        listaPersonagens.addEventListener('touchstart', (event) => {
            isScrolling = true;
            startX = event.touches[0].clientX;
        });

        listaPersonagens.addEventListener('touchmove', (event) => {
            if (!isScrolling) return;
            const currentX = event.touches[0].clientX;
            const diffX = currentX - startX;
            listaPersonagens.scrollRight += diffX;
            startX = currentX;
        });

        listaPersonagens.addEventListener('touchend', () => {
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

        submenu.classList.toggle("ativado");

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
            submenu.classList.toggle("ativado");

            section2Fundo.src = `./src/imagens/${idSeason}_fundo.jpg`;
            seasonTitle.textContent = season.getAttribute("data-name")
            seasonDescription.textContent = season.getAttribute("data-description")


        })

    })

}



function showGallery(n) {

    let slidesGallery = document.querySelectorAll(".images");

    if (n > 3) {

        counter2 = 0;

    }

    if (n < 0) {

        counter2 = 3;

    }

    for (let i = 0; i < slidesGallery.length; i++) {

        slidesGallery[i].classList.remove("selecionado");
    }

    slidesGallery[counter2].classList.add("selecionado");


}


function passCharacter(n) {

    showCharacter(counter += n);

}

function passGallery(n) {

    showGallery(counter2 += n);

}

function wallpaperGallery() {

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

        buttonShare.addEventListener('click', async () => {
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

window.addEventListener("resize", () => {

    if (window.innerWidth > 490) {

        wallpaper.classList.remove("ativado");
    }

})


buttonGrid.addEventListener("click", () => {

    wallpaper.classList.remove("ativado");

})

}

