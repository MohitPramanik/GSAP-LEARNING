gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:1,
    rotation:360
})

gsap.from("#page2 #box",{
    scale:0,
    duration:1,
    rotation:360,
    // scrollTrigger:"#page2 #box"
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body", // because the element which gets scrolled is body as all the three pages come inside body
        markers:true, // this will show the scroller-start and scroller-end on the page 
        start:"top 60%", // to set the value of scroller start
        end:"top 30%", // to set the value of scroller end 
        scrub: 2 // to animate forward and backward with scroll not at once, it's value can be either true, false or from 1 to 5 (1 to 5 for smoothness)
    }
})

gsap.from("#page3 #box",{
    scale:0,
    delay:1,
    duration:1,
    rotation:360,
    scrollTrigger:"#page3 #box"
})