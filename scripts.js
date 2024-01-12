const toggleStep = (e) => {
    var color = "lightgreen";
    if (e.style.color === color) {
        e.style.color = "black"
    } else {
        e.style.color = color;
    }   
}

const drums = ["BD", "SD", "LT", "MT", "HT", "RS", "HC", "CB", "CY", "OH", "CH"];

let curDrum = drums[0];

document.getElementById("current-drum").innerHTML = curDrum;

let tempo = 120;

document.getElementById("tempo").innerHTML = tempo;

document.getElementById("decrement").onclick = function() {
    tempo -= 1;
    document.getElementById("tempo").innerHTML = tempo;
}

document.getElementById("increment").onclick = function() {
    tempo += 1;
    document.getElementById("tempo").innerHTML = tempo;
}

console.log(curDrum);