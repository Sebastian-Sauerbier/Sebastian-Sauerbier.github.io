function typeTextFromValue(element, timePerStep, useWords=false, limit=100) {
  let value = element.getAttribute('value');
  element.classList.add('typing');
  if ( !value.includes(element.innerText) ) element.innerText = '';
  if ( value == element.innerText
    || limit < 0
    || value === null
    ) {
      element.classList.remove('typing');
      return;
    }
  value = value.split(element.innerText).join('')[0] !== ' '
    ? value.split(element.innerText).join('')[0]
    : ' ' + value.split(element.innerText).join('').split(' ').join('')[0];
  element.innerText = element.innerText + value;

  setTimeout(() => typeTextFromValue(element, timePerStep, useWords, limit-1), timePerStep);
}



typeTextFromValue(document.querySelector('.typeTextFromValue'), 100);