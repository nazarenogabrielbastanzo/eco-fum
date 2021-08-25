let h2Elems = document.querySelectorAll('h2');

for (let h2Elem of h2Elems) {
    h2Elem.textContent = (h2Elem.textContent).toUpperCase();
}