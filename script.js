const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}
function wrapWordsInSpans(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        const words = element.textContent.split(' ');
        element.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');
    });
}

// Apply this function to all your text elements
wrapWordsInSpans('.info-box h1');
wrapWordsInSpans('.info-box h3');
wrapWordsInSpans('.info-box p');
