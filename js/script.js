let counter = 0;
let bosses = [document.getElementById("dimitrescu"), document.getElementById("beneviento"), document.getElementById("morreau"), document.getElementById("heisenberg"), document.getElementById("miranda"),]

function leftButton(){
    counter--;
    if (counter < 0) {
        counter = 4
    }
    for (let index = 0; index < bosses.length; index++) {
        const element = bosses[index];
        element.classList.remove("display")
        if (counter == index) {
            element.classList.add("display")
        }
    }
}
function rightButton(){
    counter++;
    if (counter > 4) {
        counter = 0
    }
    for (let index = 0; index < bosses.length; index++) {
        const element = bosses[index];
        element.classList.remove("display")
        if (counter == index) {
            element.classList.add("display")
        }
    }
}
