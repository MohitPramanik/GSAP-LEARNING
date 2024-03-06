# Using locomotive with gsap

- For using `Locomotive` the both css and js of Locomotive must be included and the `gsap` cdn link should be attached after locomotive.

- `Locomotive cdn` provide smooth scrolling to the website and we use it to provide a water like effect to the components of our website that would move in a slight attractive way if we use locomotive. But if we use locomotive then our scrollTrigger won't work so we have to explicitly include some javascript to make it work.

```
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

        // follwoing line is not required to work pinning on touch screen

        /* pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed"*/
      });

      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

      ScrollTrigger.refresh();
    }

    init();
```

The above code was copied from the `locomotive scrollTrigger codepan` website. And few of the code is removed which was not necessary for this website.

Make some changes like Inside `el: document.querySelector()` provide your parent element on which you want to apply locomotive and remember that don't give height to that parent element otherwise it won't work in the way you want.

Also, set the scroller of the `scrollTrigger` to the element to the element on which you have applied `Locomotive` otherwise the page won't get scrolled.

```
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
```

Here, our parent element was #main that's why we mentioned here #main.

This was the html code.

```
    <div id="main">
        <div id="page1">
            <div id="box"></div>
        </div>
        <div id="page2">
            <div id="box"></div>
        </div>
        <div id="page3">
            <div id="box"></div>
        </div>
    </div>
```


