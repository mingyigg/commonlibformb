document.addEventListener('DOMContentLoaded', (event) => {
    const divs = document.querySelectorAll('.sqs-block-instagram');
    divs.forEach(div => {
        const links = div.getElementsByTagName('a');
        for (let link of links) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
            });
        }
    });
});
