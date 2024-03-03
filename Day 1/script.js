// gsap.to("#box",{
//     x:700,
//     y:300,
//     duration: 3,
//     delay:1,
//     backgroundColor: "blue",
//     rotate: 360,
//     scale: 0.5
// })

// gsap.from("#box",{
//     x:700,
//     y:300,
//     duration: 3,
//     delay:1,
//     backgroundColor: "blue",
//     rotate: 360,
//     scale: 0.5
// })

// gsap.to("h1", {
//     x: 700,
//     color: "orange",
//     duration: 3,
//     delay: 1,
//     stagger: 0.5,
//     repeat: 1,
//     yoyo: true
// })

// gsap.to("h2", {
//     x: 700,
//     color: "green",
//     duration: 3,
//     delay: 1
// })

// gsap.to("h3", {
//     x: 700,
//     color: "blue",
//     duration: 3,
//     delay: 1
// })

var tl = gsap.timeline()

tl.to("h1",{
    x:600,
    duration: 1
})
tl.to("h2",{
    x:700,
    duration:1
})
tl.to("h3",{
    x:800,
    duration:1
})