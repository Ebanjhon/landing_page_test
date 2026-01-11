// ===================== show more detail ==================
function onProductTabClick(element) {
  element.classList.toggle('active');
}

document.querySelectorAll('.product-tab-block').forEach(item => {
  item.addEventListener('click', function () {
    onProductTabClick(this);
  });
});

// ======================== show popup =====================
$(function () {
  const $popup = $('.nutrition_popup-outer');
  if (!$popup.length) return;

  $(document).on('click', '.product-nutrition-info', function (e) {
    e.stopPropagation();
    $popup.toggleClass('active');
  });

  $popup.on('click', function () {
    $popup.removeClass('active');
  });

  $popup.find('.bg-white').on('click', function (e) {
    e.stopPropagation();
  });
});

// ======================== slick-list =====================
$(document).ready(function () {
  const $main = $('.single-item');
  const $thumb = $('.multiple-items');

  $main.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
    asNavFor: '.multiple-items'
  });

  $thumb.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
    asNavFor: '.single-item',
    focusOnSelect: true,
  });

  $('.btn-slick-left').on('click', function () {
    $main.slick('slickPrev');
  });

  $('.btn-slick-right').on('click', function () {
    $main.slick('slickNext');
  });
});
