let clicks = 0;



const button = document.querySelector('#button');
const counter = document.querySelector('#counter');

button.onclick = start;


function start() {
    button.onclick = () => counter.textContent = clicks++;
    button.addEventListener("click",() =>{
        if(clicks%2===0){
            let color = "#";
            color += Math.random().toString(16).slice(2,8);
            button.style.background = color;

        }
    })

}
