function onProductTabClick(element) {
  element.classList.toggle('active');
}

document.querySelectorAll('.product-tab-block').forEach(item => {
  item.addEventListener('click', function () {
    onProductTabClick(this);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.product-nutrition-info');
  const popup = document.querySelector('.nutrition_popup-outer');
  const content = popup.querySelector('.bg-white');

  if (!btn || !popup) return;

  btn.addEventListener('click', () => {
    popup.classList.toggle('active');
  });

  popup.addEventListener('click', () => {
    popup.classList.remove('active');
  });

  content.addEventListener('click', e => {
    e.stopPropagation();
  });
});


// ======================== slick-list =====================
$(document).ready(function () {
  $('.single-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
    asNavFor: '.multiple-items'
  });

  $('.multiple-items').slick({
    slidesToShow: 4,  
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
    asNavFor: '.single-item',
    focusOnSelect: true,
  });
});