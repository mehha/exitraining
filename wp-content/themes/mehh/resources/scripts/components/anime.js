import anime from "animejs";

export function handleAnimation() {
  const el = document.querySelector('.animate strong')
  const elSpan = document.querySelector('.animate .second-part')

  if (!el) {
    return
  }

  el.innerHTML = el.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  elSpan.innerHTML = elSpan.textContent.replace(/\S/g, "<span class='letter-span'>$&</span>");

  anime.timeline({loop: false})
    .add({
    targets: '.animate .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.animate .letter-span',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 450,
    delay: (el, i) => 70*i
  })
    .add({
    targets: '.animate',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
}
