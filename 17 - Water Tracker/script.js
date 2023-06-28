const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remaining = document.getElementById('remaining');

updateBigCup();

smallCups.forEach((cup, idx) => {
    // console.log(idx);
    cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
    // console.log(idx);
    console.log(smallCups[idx].nextElementSibling);
    console.log(smallCups[idx].classList);
    const hasSibling = smallCups[idx].nextElementSibling;
    const siblingIsFull = hasSibling ? smallCups[idx].nextElementSibling.classList.contains('full') : false;
    const isFull = smallCups[idx].classList.contains('full');

    // if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
    //     idx--;
    // };

    if (isFull && !siblingIsFull) {
        idx--;
    };


    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        };
    });

    updateBigCup();
};

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    // console.log(fullCups);
    const totalCups = smallCups.length

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${fullCups / totalCups * 100}%`
    };

    if (fullCups === totalCups) {
        remaining.style.visibility = "hidden";
        remaining.style.height = 0;
    } else {
        remaining.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`;
    }

};
