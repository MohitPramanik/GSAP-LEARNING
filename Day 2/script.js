var tl = gsap.timeline();

tl.from("#nav img, #nav h3, #nav h4, #nav button", {
    y:-100,
    duration: 1,
    delay:1,
    opacity:0,
    stagger:0.3
})

tl.from("h1",{
    y:100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger: 0.2
})

tl.from("#left-img, #right-img", {
    scale:0,
    delay:1,
    stagger:0.7
}) 

tl.from("#main h5",{
    scale:0,
    opacity:0
})

tl.to("#main h5",{
    y:40,
    repeat:-1,
    duration:1,
    yoyo:true
})