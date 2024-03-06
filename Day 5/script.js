function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // following line is not required to work pinning on touch screen

    /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();

gsap.from("#page1 #box", {
  scale: 0,
  duration: 1,
  // delay:1,
  rotate: 360,
  borderRadius: 0,
});

gsap.from("#page2 #box", {
  scale: 0,
  duration: 1,
  // delay:1,
  rotate: 360,
  borderRadius: 0,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "#main",
    markers: true,
    start: "top 50%",
    scrub:true
  },
});

gsap.from("#page3 #box", {
  scale: 0,
  duration: 1,
  // delay:1,
  rotate: 360,
  borderRadius: 0,
  scrollTrigger: {
    trigger: "#page3 #box",
    scroller: "#main",
    markers: true,
    start: "top 90%",
    end:"top 50%",
    scrub: true
  },
});
