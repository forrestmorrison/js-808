const toggleStep = (e) => {
    var color = "lightgreen";
    if (e.style.color === color) {
        e.style.color = "black"
    } else {
        e.style.color = color;
    }   
}

const drums = ["BD", "SD", "LT", "MT", "HT", "RS", "HC", "CB", "CY", "OH", "CH"];

let index = 0;

let curDrum = drums[index];

document.getElementById("current-drum").innerHTML = curDrum;

document.getElementById("next").onclick = function() { 
    curDrum = drums[index+=1];
    
    if (index === 10) {
        index = -1;
    }
    

    document.getElementById("current-drum").innerHTML = curDrum;

    
}

document.getElementById("prev").onclick = function() {
    curDrum = drums[index-=1];

    if (index === 0) {
        index = 11;
    }

    document.getElementById("current-drum").innerHTML = curDrum;
}

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