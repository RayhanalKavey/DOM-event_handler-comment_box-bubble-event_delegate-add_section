// Ways to initialize event handler.
//System 1:Directly set on the  HTML element
//--------
//<button onclick="document.body.style.backgroundColor='yellow'">Make yellow </button>
//System 2: Add onlick function on the HTML element. Needs to provide brackets on function call, when called from sript.(Mostly used)
//--------
//     <button onclick='marked()'"> Make Red </button>
function marked() {
  document.body.style.backgroundColor = "red";
}

//System 3: Event initialization from script file. No brackets on function call, when called from sript.
//--------
//<button id="make-blue">Make blue</button>
const makeBlueButton = document.getElementById("make-blue");
console.log(makeBlueButton);
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
//System 3(another way): Event initialization from script file. Function directly in the variable.
//--------
//<button id="make-purple">Make purple</button>
const makePurpleButton = document.getElementById("make-purple");
// console.log(makePurpleButton);
makePurpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};
//System 4: with event listener
//--------
//<button id="make-pink" >Make pink</button>
const pinkButton = document.getElementById("make-pink");
console.log(pinkButton);
pinkButton.addEventListener("click", makePink);
function makePink() {
  document.body.style.backgroundColor = "pink";
}
//System 4(another):Function in oneline
//--------
//    <button id="make-green">Make green</button>
const greenButton = document.getElementById("make-green");
greenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});
//System 4(another):In oneline(Mostly used)
//--------
document
  .getElementById("make-goldenrod")
  .addEventListener("click", function makeGoldenrod() {
    document.body.style.backgroundColor = "goldenrod";
  });
