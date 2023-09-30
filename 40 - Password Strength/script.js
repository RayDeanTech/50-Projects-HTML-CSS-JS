// longer length, less blurry
// (20 - length) *2

const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener('input', (e) => {
    // console.log(e.target.value.length)
    passwordLength = e.target.value.length;
    blurLevel = (20 - passwordLength * 2);

    background.style.filter = `blur(${blurLevel}px)`;

});