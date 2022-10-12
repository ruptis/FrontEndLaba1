document.querySelector('.header_burger').onclick = function() {
  document.querySelector('.header_burger').classList.toggle('active');
  document.querySelector('.header_content').classList.toggle('active');
  document.querySelector('.header').classList.toggle('active');
}