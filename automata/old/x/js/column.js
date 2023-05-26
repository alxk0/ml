const leftColumn = document.getElementById('left-column');
const rightColumn = document.getElementById('right-column');
let highlightedElements = [];

function highlightNextElement() {
  const allElements = leftColumn.querySelectorAll('span');
  let nextElement = null;

  if (highlightedElements.length === 0) {
    nextElement = allElements[0];
  } else {
    const currentElementIndex = Array.from(allElements).indexOf(highlightedElements[highlightedElements.length - 1]);
    nextElement = allElements[currentElementIndex + 1];
  }

  if (nextElement !== undefined) {
    highlightedElements.push(nextElement);
    const clonedElement = nextElement.cloneNode(true);
    clonedElement.classList.add('highlighted');
    rightColumn.appendChild(clonedElement);
    setTimeout(() => {
      clonedElement.classList.add('fade-in');
    }, 50);
  }
}

leftColumn.addEventListener('scroll', () => {
  const scrollTop = leftColumn.scrollTop;
  const scrollHeight = leftColumn.scrollHeight;
  const clientHeight = leftColumn.clientHeight;

  const allElements = leftColumn.querySelectorAll('span');
  const visibleElements = Array.from(allElements).filter(el => {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  });

  const visibleElementIndexes = visibleElements.map(el => Array.from(allElements).indexOf(el));

  visibleElementIndexes.forEach(index => {
    if (!highlightedElements.includes(allElements[index])) {
      highlightNextElement();
    }
    allElements[index].classList.add('fuchsia');
  });

  highlightedElements.forEach(element => {
    if (!visibleElements.includes(element)) {
      element.classList.remove('fuchsia');
    }
  });
});
