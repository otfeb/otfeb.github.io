document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.slider-image');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    // 초기 상태: 첫 번째 이미지를 보이게 설정
    images[currentIndex].classList.add('active');

    // 이전 이미지로 이동
    prevButton.addEventListener('click', function() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        images[currentIndex].classList.add('active');
    });

    // 다음 이미지로 이동
    nextButton.addEventListener('click', function() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        images[currentIndex].classList.add('active');
    });
});
