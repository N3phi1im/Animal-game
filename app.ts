let questions = ['Does the animal fly?', 'Does the animal swim?'];
let count = 0;

function counter() {
  count += 1;
}

let divOne = document.getElementById('1');
divOne.style.display='none';

function answer_yes() {
  counter();
  let q2 = questions[count];
  let show = document.getElementById('qSpot');
  show.innerText = q2;
}

function answer_no() {
  let show = document.getElementById('qSpot');
  show.innerText = "Fine, you win. Make a new question."
  divOne.style.display='block';
}

// Start the game ** Finished **

function ask() {
  let q1 = questions[0];
  let show = document.getElementById('qSpot');
  show.innerText = q1;
  divOne.style.display='none';
  count = 0;
}

// New questions after you beat the computer ** Finished **

function newQuestion() {
  let newQ = <HTMLInputElement>document.getElementById('nQ');
  let that = newQ.value;
  questions.push(that);
  ask();
}
