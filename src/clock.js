const chips = [
    chip01,
    chip02,
    chip03,
    chip04,
    chip05,
    chip06,
    chip07,
    chip08,
    chip09,
    chip10,
    chip11,
    chip12,
    chip13
]

const randChip = chips[Math.floor(Math.random() * chips.length)];

const h1 = document.createElement("h1");
h1.innerText = "TODAY";
h1.className = "today";
h1.classList.add("hidden")
randChip.appendChild(h1);
const h2 = document.createElement("h2");
h2.innerText = "00:00:00";
h2.className = "clock";
h2.classList.add("hidden")
randChip.appendChild(h2);
const h3 = document.createElement("h3");
h3.innerText = "0000 00 / 00";
h3.className = "date";
h3.classList.add("hidden")
randChip.appendChild(h3);

const clock = document.querySelector(".clock");
const date = document.querySelector(".date");

function getClock() {
    const getDate = new Date();

    const hrs = String(getDate.getHours()).padStart(2, "0");
    const min = String(getDate.getMinutes()).padStart(2, "0");
    const sec = String(getDate.getSeconds()).padStart(2, "0");
    clock.innerText = `${hrs}:${min}:${sec}`;

    const year = String(getDate.getFullYear());
    const month = String(getDate.getMonth()+1).padStart(2, "0");
    const day = String(getDate.getDate()).padStart(2, "0");
    date.innerText = `${year} ${month} / ${day}`;
}

function hidden() {
    h1.classList.toggle("hidden")
    h2.classList.toggle("hidden")
    h3.classList.toggle("hidden")
}

setTimeout(hidden, 1000);

setInterval(getClock, 1000);