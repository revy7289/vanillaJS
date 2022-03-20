const BG = [
    "BG01.jpg",
    "BG02.jpg",
    "BG03.jpg",
    "BG04.jpg",
    "BG05.jpg"
];

const randBG = BG[Math.floor(Math.random() * BG.length)];

const BGimg = document.createElement("img");

BGimg.src = `img/${randBG}`;

document.body.appendChild(BGimg);