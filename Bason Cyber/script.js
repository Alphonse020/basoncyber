document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!navToggle || !navMenu) {
    console.error('Nav toggle or menu not found!');
    return;
  }

  navToggle.addEventListener('click', () => {
    console.log('Toggle clicked');
    navMenu.classList.toggle('active');
    const isExpanded = navMenu.classList.contains('active');
    navToggle.setAttribute('aria-expanded', isExpanded);
    navToggle.querySelector('i').classList.toggle('fa-bars');
    navToggle.querySelector('i').classList.toggle('fa-times');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.querySelector('i').classList.add('fa-bars');
      navToggle.querySelector('i').classList.remove('fa-times');
    });
  });
});