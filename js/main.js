gsap.registerPlugin(ScrollTrigger);

function getTopPartHeight() {
  return document.querySelector(".pen-top").clientHeight - 22;
}

function init() {
  gsap.set(".part3", {
    y: () => {
      return -getTopPartHeight();
    },
    scrollTrigger: {
      trigger: ".part3",
      start: "top bottom-=270px",
      end: `+=${getTopPartHeight()}`,
      pin: true,
      pinSpacing: false,
    },
  });

  const partTopOffsets = [547, 722, 842];
  gsap.utils.toArray([".part4", ".part5", ".part6"]).forEach((part, index) => {
    gsap.set(part, { y: -partTopOffsets[index] });

    gsap.to(part, {
      y: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".pen-body",
        start: "top bottom-=640px",
        end: `+=${partTopOffsets[index]}`,
        scrub: true,
      },
    });
  });

// Add class to all h3 and p
const allParts = gsap.utils.toArray('.part')
allParts.forEach((part, index) => {

    let startPosition = index === 2 ? `top+=${getTopPartHeight()} center` : 'top center'

    gsap.set(part, {
        scrollTrigger: {
            id: `${part.getAttribute('class')}`,
            trigger: part,
            start: startPosition,
            toggleClass: 'fade-in',
            // markers: true
        }
    })
})

}

window.addEventListener("load", function () {
  init();
});
