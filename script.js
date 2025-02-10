const images = {
    banner1: [
        "hermilio-alves/1.jpg",
        "hermilio-alves/2.jpg",
        "hermilio-alves/3.jpg",
        "hermilio-alves/4.jpg",
        "hermilio-alves/5.jpg",
        "hermilio-alves/6.jpg"
    ],
    banner2: [
        "rua-almeria/1.jpeg",
        "rua-almeria/2.jpeg",
        "rua-almeria/3.jpeg",
        "rua-almeria/4.jpeg",
        "rua-almeria/5.jpeg",
        "rua-almeria/6.jpeg",
        "rua-almeria/7.jpeg",
        "rua-almeria/8.jpeg",
        "rua-almeria/9.jpeg",
        "rua-almeria/10.jpeg",
        "rua-almeria/11.jpeg",
        "rua-almeria/12.jpeg",
        "rua-almeria/13.jpeg",
        "rua-almeria/14.jpeg",
        "rua-almeria/15.jpeg",
        "rua-almeria/16.jpeg",
        "rua-almeria/17.jpeg",
        "rua-almeria/18.jpeg"
    ],
    banner3: [
        "domingos-carlo/1.jpeg",
        "domingos-carlo/2.jpeg",
        "domingos-carlo/3.jpeg",
        "domingos-carlo/4.jpeg",
        "domingos-carlo/5.jpeg",
        "domingos-carlo/6.jpeg",
        "domingos-carlo/7.jpeg",
        "domingos-carlo/8.jpeg",
        "domingos-carlo/9.jpeg",
        "domingos-carlo/10.jpeg",
        "domingos-carlo/11.jpeg",
        "domingos-carlo/12.jpeg",
        "domingos-carlo/13.jpeg",
        "domingos-carlo/14.jpeg",
        "domingos-carlo/15.jpeg",
        "domingos-carlo/16.jpeg",
        "domingos-carlo/17.jpeg",
        "domingos-carlo/18.jpeg"
    ],
    banner4: [
        "manuel-francisco/1.jpeg",
        "manuel-francisco/2.jpeg",
        "manuel-francisco/3.jpeg",
        "manuel-francisco/4.jpeg",
        "manuel-francisco/5.jpeg",
        "manuel-francisco/6.jpeg",
        "manuel-francisco/7.jpeg",
        "manuel-francisco/8.jpeg",
        "manuel-francisco/9.jpeg",
        "manuel-francisco/10.jpeg",
        "manuel-francisco/11.jpeg",
        "manuel-francisco/12.jpeg",
        "manuel-francisco/13.jpeg",
        "manuel-francisco/14.jpeg",
        "manuel-francisco/15.jpeg",
        "manuel-francisco/16.jpeg",
        "manuel-francisco/17.jpeg",
        "manuel-francisco/18.jpeg",
        "manuel-francisco/19.jpeg",
        "manuel-francisco/20.jpeg",
        "manuel-francisco/21.jpeg"
    ],
    banner5: [
        "almerindo/1.jpg",
        "almerindo/2.jpg",
        "almerindo/3.jpg",
        "almerindo/4.jpg",
        "almerindo/5.jpg",
        "almerindo/6.jpg",
        "almerindo/7.jpg",
        "almerindo/8.jpg",
        "almerindo/9.jpg",
        "almerindo/10.jpg",
        "almerindo/11.jpg",
        "almerindo/12.jpg",
        "almerindo/13.jpg",
        "almerindo/14.jpg",
        "almerindo/15.jpg",
        "almerindo/16.jpg",
        "almerindo/17.jpg",
        "almerindo/18.jpg",
        "almerindo/19.jpg",
        "almerindo/20.jpg",
        "almerindo/21.jpg",
        "almerindo/22.jpg",
        "almerindo/23.jpg",
        "almerindo/24.jpg",
        "almerindo/25.jpg",
        "almerindo/26.jpg",
        "almerindo/27.jpg"
    ],
    banner6: [
        "belarmina/1.jpg",
        "belarmina/2.jpg",
        "belarmina/3.jpg",
        "belarmina/4.jpg",
        "belarmina/5.jpg",
        "belarmina/6.jpg",
        "belarmina/7.jpg",
        "belarmina/8.jpg",
        "belarmina/9.jpg",
        "belarmina/10.jpg",
        "belarmina/11.jpg",
        "belarmina/12.jpg",
        "belarmina/13.jpg",
        "belarmina/14.jpg",
        "belarmina/15.jpg",
        "belarmina/16.jpg",
        "belarmina/17.jpg",
        "belarmina/18.jpg",
        "belarmina/19.jpg",
        "belarmina/20.jpg",
        "belarmina/21.jpg",
        "belarmina/22.jpg"
    ],
    banner7: [
        "santa-teresa/1.jpeg",
        "santa-teresa/2.jpeg",
        "santa-teresa/3.jpeg",
        "santa-teresa/4.jpeg",
        "santa-teresa/5.jpeg",
        "santa-teresa/6.jpeg",
        "santa-teresa/7.jpeg",
        "santa-teresa/8.jpeg",
        "santa-teresa/9.jpeg",
        "santa-teresa/10.jpeg",
        "santa-teresa/11.jpeg",
        "santa-teresa/12.jpeg",
        "santa-teresa/13.jpeg",
        "santa-teresa/14.jpeg",
        "santa-teresa/15.jpeg",
        "santa-teresa/16.jpeg",
        "santa-teresa/17.jpeg"
    ]
};

// Criar automaticamente os índices de cada banner
const currentIndexes = {};
Object.keys(images).forEach(bannerId => {
    currentIndexes[bannerId] = 0;
});

function updateImage(bannerId) {
    const banner = document.getElementById(bannerId);
    if (banner) {
        banner.querySelector(".banner-content img").src = images[bannerId][currentIndexes[bannerId]];
    }
}

function prevImage(bannerId) {
    currentIndexes[bannerId] = (currentIndexes[bannerId] - 1 + images[bannerId].length) % images[bannerId].length;
    updateImage(bannerId);
}

function nextImage(bannerId) {
    currentIndexes[bannerId] = (currentIndexes[bannerId] + 1) % images[bannerId].length;
    updateImage(bannerId);
}

// tela cheia
function expandImage(bannerId) {
    const fullscreenContainer = document.createElement("div");
    fullscreenContainer.classList.add("fullscreen");
    fullscreenContainer.innerHTML = `
        <img src="${images[bannerId][currentIndexes[bannerId]]}" alt="Imagem Expandida">
        <button class="close-fullscreen" onclick="closeFullscreen()">✖</button>
        <button class="prev-fullscreen" onclick="prevFullscreen('${bannerId}')">❮</button>
        <button class="next-fullscreen" onclick="nextFullscreen('${bannerId}')">❯</button>
    `;
    document.body.appendChild(fullscreenContainer);
}

// fecha tela cheia
function closeFullscreen() {
    document.querySelector(".fullscreen").remove();
}

// setinha dentro da tela cheia
function prevFullscreen(bannerId) {
    prevImage(bannerId);
    document.querySelector(".fullscreen img").src = images[bannerId][currentIndexes[bannerId]];
}

function nextFullscreen(bannerId) {
    nextImage(bannerId);
    document.querySelector(".fullscreen img").src = images[bannerId][currentIndexes[bannerId]];
}
