//ON PAGE LOAD
function OpenSpinner(){
window.location.href="#open-modal";
}


//SPINNER
function shuffle(array) {
var currentIndex = array.length,
randomIndex;
while (0 !== currentIndex) {
randomIndex = Math.floor(Math.random() * currentIndex);
currentIndex--;
[array[currentIndex], array[randomIndex]] = [
array[randomIndex],
array[currentIndex],
];
}
return array;
}

function spin() {
const box = document.getElementById("box");
const element = document.getElementById("mainbox");
let SelectedItem = "";
let html = shuffle([1890, 2250, 2610]);
let css = shuffle([1850, 2210, 2570]); //Kemungkinan : 100%
let dom = shuffle([1810, 2170, 2530]);
let ajax = shuffle([1770, 2130, 2490]);
let php = shuffle([1750, 2110, 2470]);
let mysql = shuffle([1630, 1990, 2350]);
let figma = shuffle([1570, 1930, 2290]);
let Hasil = shuffle([
html[0],
css[0],
dom[0],
ajax[0],
php[0],
mysql[0],
figma[0],
]);

// get the value of selected item
if (html.includes(Hasil[0])) SelectedItem = "Spinner says HTML";
if (css.includes(Hasil[0])) SelectedItem = "Spinner says CSS";
if (dom.includes(Hasil[0])) SelectedItem = "Spinner says DOM";
if (ajax.includes(Hasil[0])) SelectedItem = "Spinner says Ajax";
if (php.includes(Hasil[0])) SelectedItem = "Spinner says PHP";
if (mysql.includes(Hasil[0])) SelectedItem = "Spinner says Mysql";
if (figma.includes(Hasil[0])) SelectedItem = "Spinner says Figma";

// spin
box.style.setProperty("transition", "all ease 5s");
box.style.transform = "rotate(" + Hasil[0] + "deg)";
element.classList.remove("animate");
setTimeout(function () {
element.classList.add("animate");
}, 5000);

// alert
setTimeout(function () {
document.getElementById("result").innerHTML = SelectedItem;
document.getElementById("mainbox").style.opacity="0";
}, 5500);

// delay
setTimeout(function () {
box.style.setProperty("transition", "initial");
box.style.transform = "rotate(90deg)";
document.getElementById("mainbox").style.opacity="1";
}, 6000);
}

