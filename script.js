const totalCounter = document.getElementById('total-counter');
const interviewCounter = document.getElementById('interview-counter');
const rejectedCounter = document.getElementById('rejected-counter');

// available-job-counter
const availableJobCounter = document.getElementById('available-job-counter');

const tab1 = document.querySelectorAll('#tab1 .card').length;
totalCounter.innerText = tab1;
availableJobCounter.innerText = tab1 + ' jobs';

