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
