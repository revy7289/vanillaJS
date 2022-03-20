const pastelColor = [
// pastel color
    "#ACCA48",
    "#F8E299",
    "#90D2F4",
    "#DA9EC4",
    "#C3DC81",
    "#F2987E",
    "#BCAAD2",
    "#F7C83E",
    "#FCE0B8",
    "#F7BD8D",
    "#B78CB7",
    "#F7AE4F",
    "#F3ACA6",
];

const solidColor = [
    // solid color
    "#BB1B1F",
    "#E69312",
    "#85B933",
    "#F3AC4C",
    "#33B1D8",
    "#911457",
    "#B73F8E",
    "#93B32B",
    "#EE832B",
    "#E9BA40",
    "#81ACCD",
    "#D11871",
    "#91B637"
];

const chip01 = document.querySelector(".chip01")
const chip02 = document.querySelector(".chip02")
const chip03 = document.querySelector(".chip03")
const chip04 = document.querySelector(".chip04")
const chip05 = document.querySelector(".chip05")
const chip06 = document.querySelector(".chip06")
const chip07 = document.querySelector(".chip07")
const chip08 = document.querySelector(".chip08")
const chip09 = document.querySelector(".chip09")
const chip10 = document.querySelector(".chip10")
const chip11 = document.querySelector(".chip11")
const chip12 = document.querySelector(".chip12")
const chip13 = document.querySelector(".chip13")

function changeColor() {
    const randColor = function() {
       return Math.floor(Math.random() * pastelColor.length)
    }
    chip01.style.backgroundColor = pastelColor[randColor()];
    chip02.style.backgroundColor = pastelColor[randColor()];
    chip03.style.backgroundColor = pastelColor[randColor()];
    chip04.style.backgroundColor = pastelColor[randColor()];
    chip05.style.backgroundColor = pastelColor[randColor()];
    chip06.style.backgroundColor = pastelColor[randColor()];
    chip07.style.backgroundColor = pastelColor[randColor()];
    chip08.style.backgroundColor = pastelColor[randColor()];
    chip09.style.backgroundColor = pastelColor[randColor()];
    chip10.style.backgroundColor = pastelColor[randColor()];
    chip11.style.backgroundColor = pastelColor[randColor()];
    chip12.style.backgroundColor = pastelColor[randColor()];
    chip13.style.backgroundColor = pastelColor[randColor()];
}

setTimeout(changeColor, 1000);