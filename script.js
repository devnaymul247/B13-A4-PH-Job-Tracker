// get: 3 counter
const totalCounter = document.getElementById('total-counter');
const interviewCounter = document.getElementById('interview-counter');
const rejectedCounter = document.getElementById('rejected-counter');

// get: available-job-counter
const availableJobCounter = document.getElementById('available-job-counter');

// get: delete icon btn
const btnTrashIcons = document.querySelectorAll('.fa-trash');
const tab1EmptyCard = document.getElementById('empty-card-for-all-tab');
const tab2EmptyCard = document.getElementById('card-empty-tab2');
const tab3EmptyCard = document.getElementById('card-empty-tab3');


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
        if (totalCounter.innerText == 0) {
            tab1EmptyCard.classList.remove('hidden');
        }
    });
};

///////////////////////////// INTERVIEW BUTTON /////////////////////////
const btnInterviews = document.querySelectorAll('.btn-accent');
const tab2id = document.getElementById('tab2');

for (const btnInterview of btnInterviews) {
  btnInterview.addEventListener('click', function(event) {

    const card = event.target.closest('.card');

    // already clicked before --> stop everything
    if (card.dataset.interviewed === "true") return;

    // mark as processed
    card.dataset.interviewed = "true";


    // badge change
    const badge = card.querySelector('.dim-btn');
    badge.classList.add('btn-accent');
    badge.classList.remove('btn-soft');
    badge.innerText = 'INTERVIEW';


    // clone card
    const clone = card.cloneNode(true);
    tab2id.appendChild(clone);

    // counter update
    const tab2 = document.querySelectorAll('#tab2 .card').length;
    interviewCounter.innerText = tab2;

    // ex: empty card
        if (interviewCounter.innerText > 0) {
            tab2EmptyCard.classList.add('hidden');
        };

  });
};

///////////////////////////////// REJECTED BUTTON /////////////////////////
///////////////////////////////////////////////////////////////////////////
const btnRejectedAll = document.querySelectorAll('.btn-error');
const tab3id = document.getElementById('tab3');

for (const btnRejected of btnRejectedAll) {
  btnRejected.addEventListener('click', function(event) {

    const cardOfReject = event.target.closest('.card');

    // already clicked before --> stop everything
    if (cardOfReject.dataset.interviewed === "true") return;

    // mark as processed
    cardOfReject.dataset.interviewed = "true";


    // badge change
    const badgeOfReject = cardOfReject.querySelector('.dim-btn');
    badgeOfReject.classList.add('btn-error');
    badgeOfReject.classList.remove('btn-soft');
    badgeOfReject.innerText = 'REJECTED';


    // clone card
    const clone = cardOfReject.cloneNode(true);
    tab3id.appendChild(clone);

    // counter update
    const tab3 = document.querySelectorAll('#tab3 .card').length;
    rejectedCounter.innerText = tab3;

    // ex: empty card
        if (rejectedCounter.innerText > 0) {
            tab3EmptyCard.classList.add('hidden');
        };

  });
};
