const leftColumn = document.getElementById('left-column');
const rightColumn = document.getElementById('right-column');
let highlightedElement = null;

function highlightNextElement() {
    const allElements = leftColumn.querySelectorAll('span');
    let nextElement = null;

    if (highlightedElement === null) {
        nextElement = allElements[0];
    } else {
        const currentElementIndex = Array.from(allElements).indexOf(highlightedElement);
        nextElement = allElements[currentElementIndex + 1];
    }

    if (nextElement !== undefined) {
        highlightedElement = nextElement;
        const clonedElement = nextElement.cloneNode(true);
        clonedElement.classList.add('highlighted');
        rightColumn.appendChild(clonedElement);
    }
}

leftColumn.addEventListener('scroll', () => {
    const scrollTop = leftColumn.scrollTop;
    const scrollHeight = leftColumn.scrollHeight;
    const clientHeight = leftColumn.clientHeight;

    if (scrollTop + clientHeight === scrollHeight) {
        highlightNextElement();
    }
});