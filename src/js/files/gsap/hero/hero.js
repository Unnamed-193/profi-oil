import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  // 1. Анимация заголовка и текста
  tl.from('.hero__title', { 
    y: 30, 
    autoAlpha: 0, 
    duration: 0.5, 
    ease: "power1.out" 
  }, '+=0.1')
    .from('.hero__text', { 
      y: 30, 
      autoAlpha: 0, 
      duration: 0.5, 
      ease: "power1.out" 
    });

  // 2. Анимация slogan-box (после текста, перед кнопкой)
  if (isMobile) {
    tl.from(".hero__slogan-box", {
      clipPath: "inset(0 0 0 100%)", // Слева направо
      autoAlpha: 0,
      duration: 0.5,
      ease: "power1.out"
    }, "-=0.2"); // Начинается чуть раньше завершения анимации текста
  } else {
    tl.from('.hero__slogan-box', { 
      y: 30, 
      autoAlpha: 0, 
      duration: 0.5, 
      ease: "power1.out" 
    }, "-=0.2");
  }

  // 3. Анимация кнопки (после slogan-box)
  tl.from('.hero__button', { 
    y: 30, 
    autoAlpha: 0, 
    duration: 0.5, 
    ease: "power1.out" 
  }, "+=0.2"); // Задержка после slogan-box

  // 4. Анимация фар (после всех элементов)
  tl.fromTo('.headlights', 
    { autoAlpha: 0 }, 
    { 
      autoAlpha: 1, 
      duration: 0.5, 
      ease: "power1.out", 
      yoyo: true, 
      repeat: 1 
    }
  );
});