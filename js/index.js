const menu = document.querySelector('#menu');


const sidebar = document.querySelector('.navegador');

menu.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
});
