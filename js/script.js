const $main = $('.single-item');
const $thumb = $('.multiple-items');

$(document).ready(function () {
  // slick-list
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

  // show mortablele
  $('.product-table-item').on('click', initShowProductTable);
  $('.item-question').on('click', initShowAnswer);

  // slick video 
  // $('.slick-list-clip').slick({
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   infinite: false,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2
  //       }
  //     }
  //   ]
  // });
});


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

//======================= show more ====================
function initShowProductTable() {
  const $content = $(this).find('.product-table-content');

  if ($content.hasClass('active')) {
    $content.removeClass('active');
  } else {
    $content[0].offsetHeight;
    $content.addClass('active');
  }
}

function initShowAnswer() {
  $(this).toggleClass('active');
}

// ========================= play video ==================
$(function () {
  $('.product-play').on('click', function () {
    const currentWrapper = $(this);
    const currentVideo = currentWrapper.find('.product-video').get(0);
    const currentIcon = currentWrapper.find('.play-icon');

    $('.product-video').each(function () {
      if (this !== currentVideo) {
        this.pause();
        this.currentTime = 0;
        $(this).siblings('.play-icon').fadeIn(200);
      }
    });

    if (currentVideo.paused) {
      currentVideo.muted = false;
      currentVideo.volume = 1;
      currentVideo.play();
      currentIcon.fadeOut(200);
    } else {
      currentVideo.pause();
      currentVideo.currentTime = 0;
      currentIcon.fadeIn(200);
    }
  });

  // Khi video chạy xong → reset
  $('.product-video').on('ended', function () {
    this.currentTime = 0;
    this.load();
    $(this).siblings('.play-icon').fadeIn(200);
  });
});
// ===============
$(function () {
  const $slider = $('.slick-list-clip');
  const $dots = $('.slick-dots li');

  // Init slick
  $slider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $dots.removeClass('slick-active');
    $dots.eq(nextSlide).addClass('slick-active');
  });

  $dots.on('click', function () {
    const index = $(this).index();
    $slider.slick('slickGoTo', index);
  });
});
