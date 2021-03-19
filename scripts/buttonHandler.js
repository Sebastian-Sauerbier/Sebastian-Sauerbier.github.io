[...document.getElementsByClassName('menuButton')].forEach( button => {
  button.addEventListener('click', () => {
    [...document.getElementsByClassName('menuButton')].forEach( btn => {
      btn.classList.toggle('menuOpen');
    });
  });
});