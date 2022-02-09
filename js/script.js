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

let compt2=0;
let exemple2 = document.getElementById("part2");
let text2 = document.getElementById("RE81");
text2.classList.add("none");
function Solution2(){
  text2.classList.remove("none");
  compt2+=1
  if (compt2==2){
      compt2=0;
      text2.classList.add("none");
  }
}

let compt3=0;
let exemple3 = document.getElementById("part3");
let text3 = document.getElementById("RE82");
text3.classList.add("none");
function Solution3(){
  text3.classList.remove("none");
  compt3+=1
  if (compt3==2){
      compt3=0;
      text3.classList.add("none");
  }
}

let compt4=0;
let exemple4 = document.getElementById("part4");
let text4 = document.getElementById("RE83");
text4.classList.add("none");
function Solution4(){
  text4.classList.remove("none");
  compt4+=1
  if (compt4==2){
      compt4=0;
      text4.classList.add("none");
  }
}

let compt5=0;
let exemple5 = document.getElementById("part5");
let text5 = document.getElementById("RE84");
text5.classList.add("none");
function Solution5(){
  text5.classList.remove("none");
  compt5+=1
  if (compt5==2){
      compt5=0;
      text5.classList.add("none");
  }
}

let compt6=0;
let exemple6 = document.getElementById("part6");
let text6 = document.getElementById("RE85");
text6.classList.add("none");
function Solution6(){
  text6.classList.remove("none");
  compt6+=1
  if (compt6==2){
      compt6=0;
      text6.classList.add("none");
  }
}

let compt7=0;
let exemple7 = document.getElementById("part7");
let text7 = document.getElementById("RE86");
text7.classList.add("none");
function Solution7(){
  text7.classList.remove("none");
  compt7+=1
  if (compt7==2){
      compt7=0;
      text7.classList.add("none");
  }
}

let compt8=0;
let exemple8 = document.getElementById("part8");
let text8 = document.getElementById("RE87");
text8.classList.add("none");
function Solution8(){
  text8.classList.remove("none");
  compt8+=1
  if (compt8==2){
      compt8=0;
      text8.classList.add("none");
  }
}

let compt9=0;
let exemple9 = document.getElementById("chèvre");
let text9 = document.getElementById("nav");
text9.classList.add("none");
function navigation(){
  text9.classList.remove("none");
  compt9+=1
  if (compt9==2){
      compt9=0;
      text9.classList.add("none");
  }
}