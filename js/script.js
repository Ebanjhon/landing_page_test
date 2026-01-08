function onProductTabClick(element) {
    console.log('Đã click vào:', element);
    element.classList.toggle('active');
}

document.querySelectorAll('.product-tab-block').forEach(item => {
    item.addEventListener('click', function () {
        onProductTabClick(this);
    });
});