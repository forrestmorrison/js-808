const toggleStep = (e) => {
    var color = "lightgreen";
    if (e.style.color === color) {
        e.style.color = "black"
    } else {
        e.style.color = color;
    }   
}

const drums = ["BD", "SD", "LT", "MT", "HT", "RS", "HC", "CB", "CY", "OH", "CH"];

let initialDrumVal = drums[0];

const cycleDrums = (cur) => {
    for (let i = 0; i < drums.length; i++) {
        if(cur[i] === (drums.length - 1)) {
            cur[i] = 0;
        } else {
            i++;
        }
    }
}