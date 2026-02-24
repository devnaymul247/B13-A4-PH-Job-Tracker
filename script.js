// get: 3 counter
const totalCounter = document.getElementById('total-counter');
const interviewCounter = document.getElementById('interview-counter');
const rejectedCounter = document.getElementById('rejected-counter');

// get: available-job-counter
const availableJobCounter = document.getElementById('available-job-counter');

// get: delete icon btn
const btnTrashIcons = document.querySelectorAll('.fa-trash');
const tab1EmptyCard = document.getElementById('empty-card-for-all-tab');


// exiqution: counter added
const tab1 = document.querySelectorAll('.card').length;
totalCounter.innerText = tab1;
availableJobCounter.innerText = tab1 + ' jobs';

// exiqution: delete btn
for (const btnTrashIcon of btnTrashIcons) {
    let btnTrash = btnTrashIcon.parentNode;
    btnTrash.addEventListener('click', function (event) {
        let btnTrashDeligation = event.target.closest('.card');
        btnTrashDeligation.style.display = 'none';
        btnTrashDeligation.classList.remove('card');

        // exiqution: counter added
        const tab1 = document.querySelectorAll('.card').length;
        totalCounter.innerText = tab1;
        availableJobCounter.innerText = tab1 + ' jobs';

        // ex: empty card
        if(totalCounter.innerText == 0){
            tab1EmptyCard.classList.remove('hidden');
        }
    });
};

///////////////////////////////// Dual button /////////////////////////
const btnInterviews = document.querySelectorAll('.btn-accent');

for(const btnInterview of btnInterviews){
    btnInterview.addEventListener('click', function(event){
    const btnInterviewDele = event.target.closest('.card');
    const btnInterviewDeleChild = btnInterviewDele.querySelector('.dim-btn');
    btnInterviewDeleChild.classList.add('btn-accent');
    btnInterviewDeleChild.classList.remove('btn-soft');
    btnInterviewDeleChild.innerText = ('INTERVIEW');
});
};




