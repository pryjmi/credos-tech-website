var menuSecond = document.querySelector('span');

function toggleMenuSecond () {
  menuSecond.classList.toggle('close');
}

menuSecond.addEventListener('click', toggleMenuSecond);