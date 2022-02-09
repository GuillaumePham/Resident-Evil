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

let compt=0;
let exemple = document.getElementById("part1");
let text = document.getElementById("RE7");
text.classList.add("none");
function Solution(){
  text.classList.remove("none");
  compt+=1
  if (compt==2){
      compt=0;
      text.classList.add("none");
  }
}

let compt=0;
let exemple = document.getElementById("part2");
let text = document.getElementById("RE81");
text.classList.add("none");
function Solution(){
  text.classList.remove("none");
  compt+=1
  if (compt==2){
      compt=0;
      text.classList.add("none");
  }
}
