const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {

    /**
     * Conciseness and Readability: By using .map(), developers can express transformations succinctly
     * in a single line of code. This can make the code more readable and maintainable compared to
     * using explicit loops or other array manipulation techniques.
     */

    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')

});