window.onload = function () {
    gsap.registerPlugin(ScrollTrigger);

    // subTexts 먼저 정의!
    const subTexts = document.querySelectorAll(".visual .box .subText");

    // 시작 부분 이니셜 로고
    gsap.timeline({
        scrollTrigger: {
            trigger: ".visual",
            start: "30% 40%",
            end: "100% 0%",
            scrub: 1,
            markers: false,
        }
    })
        .to('.logoWrap #y', { x: 20, y: 1450, rotate: 40, ease: 'none', duration: 7 }, 0.2)
        .to('.logoWrap #e', { x: 20, y: 1150, rotate: -50, ease: 'none', duration: 7 }, 1)
        .to('.logoWrap #w', { x: 45, y: 1350, rotate: 50, ease: 'none', duration: 7 }, 0)
        .to('.logoWrap #o', { x: 50, y: 1250, rotate: -40, ease: 'none', duration: 7 }, 0.5)
        .to('.logoWrap #n', { x: 100, y: 1100, rotate: -80, ease: 'none', duration: 7 }, 0);

      // .visual .box 내부 요소 순차 등장
    gsap.from(".visual .box > div", {
        scrollTrigger: {
            trigger: ".visual .box",
            start: "top 70%",           // 박스가 화면에 보이기 시작할 때
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.3                // 0.3초 간격으로 순차 실행
    });

};




