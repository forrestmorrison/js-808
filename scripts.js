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

document.getElementById("decrement").onclick = function() {

}

document.getElementById("increment").onclick = function() {
    for (let i = 0; i < drums.length; i++) {
        if (curDrum === drums[i]) {
            i++;
        }
    }
}

console.log(curDrum);