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
    clonedElement.classList.remove('fuchsia'); // remove fuchsia class
    rightColumn.appendChild(clonedElement);
    setTimeout(() => {
      clonedElement.classList.add('fade-in');
    }, 50);
  }
}

function highlightUserSelection() {
  const selection = window.getSelection();
  if (!selection.isCollapsed) {
    const range = selection.getRangeAt(0);
    const highlightedText = range.extractContents();
    const span = document.createElement('span');
    span.classList.add('user-highlight');
    span.appendChild(highlightedText);
    span.classList.add('fade-in'); // add fade-in class
    range.insertNode(span);
  }
}

function removeHighlights() {
  const highlightedSpans = leftColumn.querySelectorAll('.user-highlight');
  highlightedSpans.forEach(span => {
    span.outerHTML = span.innerHTML;
  });
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

leftColumn.addEventListener('mouseup', () => {
  highlightUserSelection();
  const userHighlightedElements = leftColumn.querySelectorAll('.user-highlight');
  userHighlightedElements.forEach(el => {
    el.classList.add('fuchsia');
  });
});

leftColumn.addEventListener('keyup', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    highlightUserSelection();
    const userHighlightedElements = leftColumn.querySelectorAll('.user-highlight');
    userHighlightedElements.forEach(el => {
      el.classList.add('fuchsia');
    });
  }
});

rightColumn.addEventListener('click', () => {
  removeHighlights();
});

function checkScroll() {
  const highlightElems = document.querySelectorAll('.highlighted');
  highlightElems.forEach((highlightElem) => {
    const textId = highlightElem.dataset.textId;
    const textElem = document.getElementById(textId);
    const rect = highlightElem.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      textElem.classList.add('fade-in');
    }
  });
}