let currentIndex = 0;
const images = [
    "hermilio-alves/1.jpg",
    "hermilio-alves/2.jpg",
    "hermilio-alves/3.jpg"
];

function updateImage() {
    document.querySelector(".banner-content img").src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

// Expande a imagem em tela cheia
function expandImage() {
    const fullscreenContainer = document.createElement("div");
    fullscreenContainer.classList.add("fullscreen");
    fullscreenContainer.innerHTML = `
        <img src="${images[currentIndex]}" alt="Imagem Expandida">
        <button class="close-fullscreen" onclick="closeFullscreen()">✖</button>
        <button class="prev-fullscreen" onclick="prevFullscreen()">❮</button>
        <button class="next-fullscreen" onclick="nextFullscreen()">❯</button>
    `;
    document.body.appendChild(fullscreenContainer);
}

// Fecha a tela cheia
function closeFullscreen() {
    document.querySelector(".fullscreen").remove();
}

// Muda a imagem dentro do modo tela cheia
function prevFullscreen() {
    prevImage();
    document.querySelector(".fullscreen img").src = images[currentIndex];
}

function nextFullscreen() {
    nextImage();
    document.querySelector(".fullscreen img").src = images[currentIndex];
}
