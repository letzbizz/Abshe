function highlightElement(event) {
   event.classList.add('p-3');
   event.classList.add('box-shadow');
   event.classList.add('w-100');
}

function removeHighlightElement(event) {
   event.classList.remove('p-3');
   event.classList.remove('box-shadow');
   event.classList.remove('w-100');
}

function highlightFooter(event) {
   event.classList.add('box-shadow');
}

function removeHighlightFooter(event) {
   event.classList.remove('box-shadow');
}