var questions = ['Does the animal fly?', 'Does the animal swim?'];
var count = 0;
function counter() {
    count += 1;
}
var divOne = document.getElementById('1');
divOne.style.display = 'none';
function answer_yes() {
    counter();
    var q2 = questions[count];
    var show = document.getElementById('qSpot');
    show.innerText = q2;
}
function answer_no() {
    var show = document.getElementById('qSpot');
    show.innerText = "Fine, you win. Make a new question.";
    divOne.style.display = 'block';
}
function ask() {
    var q1 = questions[0];
    var show = document.getElementById('qSpot');
    show.innerText = q1;
    divOne.style.display = 'none';
    count = 0;
}
function newQuestion() {
    var newQ = document.getElementById('nQ');
    var that = newQ.value;
    questions.push(that);
    ask();
}
