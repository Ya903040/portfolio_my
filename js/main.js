let clicks = 0;

//this is second
const TIMEOUT = 10000;

let display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');

button.onclick = start;


function start() {
    button.onclick = () => counter.textContent = clicks++;
    button.addEventListener("click",(where, element) =>{
        if(clicks%2===0){
            let color = "#";
            color += Math.random().toString(16).slice(2,8);
            button.style.background = color;
        }
    })

}
