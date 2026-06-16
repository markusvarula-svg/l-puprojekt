const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
  toggle.textContent = menu.classList.contains('open') ? '▼ SULGE' : '▲ MENÜÜ';
});

menu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.textContent = '▲ MENÜÜ';
  });
});