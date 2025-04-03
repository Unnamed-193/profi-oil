import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();

  tl.from('.hero__title', { y: 30, autoAlpha: 0, duration: 0.5, ease: "power1.out" }, '+=0.1')
    .from('.hero__text', { y: 30, autoAlpha: 0, duration: 0.5, ease: "power1.out" })
    .from('.hero__slogan', { y: 30, autoAlpha: 0, duration: 0.5, ease: "power1.out" }, '-=0.1')
    .from('.hero__button', { y: 30, autoAlpha: 0, duration: 0.5, ease: "power1.out" }, '+=0.2')
    .fromTo('.headlights',
      { autoAlpha: 0 }, // Начальное состояние (невидимы)
      {
        autoAlpha: 1,   // Появляются
        duration: 0.5,
        ease: "power1.out",
        yoyo: true,     // Автоматически возвращается к начальному состоянию
        repeat: 1,      // Повторяем 1 раз (появится и исчезнет)
      })
})