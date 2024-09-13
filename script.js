document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll('.project-slider');

    sliders.forEach((slider) => {
        let currentIndex = 0;
        const images = slider.querySelectorAll('.slider-image');
        const prevButton = slider.querySelector('.prev');
        const nextButton = slider.querySelector('.next');
        const dots = slider.querySelectorAll('.dot'); // 페이지 구분자

        // 초기 상태: 첫 번째 이미지를 보이게 설정
        images[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');

        // 이미지 전환
        function showSlide(index) {
            images.forEach((img, i) => img.classList.toggle('active', i === index));
            dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
        }

        // 이전 이미지로 이동
        prevButton.addEventListener('click', function() {
            currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
            showSlide(currentIndex);
        });

        // 다음 이미지로 이동
        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
            showSlide(currentIndex);
        });

        // 페이지 구분자 클릭 시 이미지 전환
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                currentIndex = index;
            });
        });
    });

    // 최상단 이동 버튼 기능 추가
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // 스크롤 이벤트로 버튼을 나타내거나 숨김
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    // 최상단으로 이동하는 함수
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 비디오 제어
    const video = document.querySelector("#handtrisVideo");
    const playButton = document.querySelector("#playVideo");

    playButton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playButton.style.display = 'none'; // 비디오 재생 후 버튼 숨김
        }
    });

});
