window.onload = function() {
  gsap.registerPlugin(ScrollTrigger);
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
    .to('.logoWrap #n', { x: 100, y: 1100, rotate: -80, ease: 'none', duration: 7 }, 0)
    .to('.logoWrap #y2', { x: 30, y: 1450, rotate: 60, ease: 'none', duration: 7 }, 0.2)
    .to('.logoWrap #w2', { x: 55, y: 1350, rotate: 20, ease: 'none', duration: 7 }, 0);

  // .visual .box 내부 요소 순차 등장
  gsap.from(".visual .box > div", {
    scrollTrigger: {
      trigger: ".visual .box",
      start: "top 70%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.3
  });
};

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  window.addEventListener('load', () => {
    const listEl = document.querySelector('.list-wrapper');
    const sectionEl = document.querySelector('.skills');
    const scrollDistance = listEl.scrollWidth - sectionEl.clientWidth;

    gsap.to(listEl, {
      x: -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: listEl,
        start: 'center center',
        end: () => `+=${scrollDistance}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
        markers: false
      }
    });

    const listA = gsap.utils.toArray('.skills .list .a');
    const listB = gsap.utils.toArray('.skills .list .b');
    const listC = gsap.utils.toArray('.skills .list .c');

    gsap.to(listA, {
      y: 30,
      rotation: 0,
      scrollTrigger: {
        trigger: listEl,
        start: 'center center',
        end: () => `+=${scrollDistance}`,
        scrub: 2
      }
    });
    gsap.to(listB, {
      y: -50,
      rotation: 0,
      scrollTrigger: {
        trigger: listEl,
        start: 'center center',
        end: () => `+=${scrollDistance}`,
        scrub: 2
      }
    });
    gsap.to(listC, {
      y: 10,
      rotation: 0,
      scrollTrigger: {
        trigger: listEl,
        start: 'center center',
        end: () => `+=${scrollDistance}`,
        scrub: 2
      }
    });
  });

  // --- nav slide ---
  const hamburgerBtn = document.querySelector('#hamburger');
  const navSlide = document.getElementById('navSlide');
  const hamburgerLabel = document.querySelector('label[for="hamburger"]');

  hamburgerBtn.addEventListener('click', e => {
    e.stopPropagation();
    if (hamburgerBtn.checked) navSlide.classList.add('active');
    else navSlide.classList.remove('active');
  });

  navSlide.addEventListener('click', e => e.stopPropagation());

  document.addEventListener('click', e => {
    const isInside = navSlide.contains(e.target);
    const isHamburger = hamburgerLabel.contains(e.target);
    if (!isInside && !isHamburger) {
      navSlide.classList.remove('active');
      hamburgerBtn.checked = false;
    }
  });
  // --- nav slide end ---

  // --- modal start ---
  document.querySelectorAll('.design-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const modal = document.getElementById('designModal');
      const modalImg = document.getElementById('modalImage');
      const parent = thumb.closest('.item');
      modalImg.src = thumb.dataset.src;
      if (
        parent.classList.contains('item1') ||
        parent.classList.contains('item2') ||
        parent.classList.contains('item3')
      ) {
        modal.classList.add('small-modal');
      } else {
        modal.classList.remove('small-modal');
      }
      modal.style.display = 'flex';
    });
  });

  document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('designModal').style.display = 'none';
  });

  document.getElementById('designModal').addEventListener('click', e => {
    if (!e.target.closest('.modal-content')) e.currentTarget.style.display = 'none';
  });
  // --- modal end ---
});