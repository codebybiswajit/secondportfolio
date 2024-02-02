let sections = document.querySelectorAll('header');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('home1');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('home1');
        }
      });
    }
  });
}

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);