const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    // console.log(currentActive);

    // don't go past 4
    if (currentActive > circles.length) {

        currentActive = circles.length

    };

    // console.log(currentActive);

    update();
});


prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {

        currentActive = 1

    };

    // console.log(currentActive);

    update();


});


function update() {

    console.log(`Currently Active: ${currentActive}`);


    circles.forEach((circle, idx) => {

        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        };

    });

    // get all actives
    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    console.log(`width:  ${progress.style.width}`);

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    };

};


