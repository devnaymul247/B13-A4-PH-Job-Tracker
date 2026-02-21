const totalCounter = document.getElementById('total-counter');
const interviewCounter = document.getElementById('interview-counter');
const rejectedCounter = document.getElementById('rejected-counter');

const tab1 = document.querySelectorAll('#tab1 .card').length;
totalCounter.innerText = tab1;