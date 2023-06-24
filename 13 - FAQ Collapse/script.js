const buttonNodes = document.querySelectorAll('.faq-toggle');

buttonNodes.forEach(node => {

    node.addEventListener('click', (e) => {

        // console.log(e.target);
        // console.log(node.parentNode)
        node.parentNode.classList.toggle("active");



    });

    // console.log(node.children);
});