## ScrollTrigger

This is used to start the animation when we scroll down the page.

It is basically one of the plugin of gsap and is used like a property inside the `gsap function`

It can be written like :

```
    gsap.from("#page2 #box",{
        scale:0,
        duration:1,
        rotation:360,
        scrollTrigger:"#page2 #box"
    })
```

Here directly the element which we want to trigger on scroll is provided but we want to add more functionality. So we will have to write it as an object.

### Syntax:

```
    gsap.from("#page2 #box",{
           scale:0,
           duration:1,
           rotation:360,
           scrollTrigger:{
               trigger: "#page2 #box",
               scroller:"body",
               markers:true,
               start:"top 60%",
               end:"top 30%",
               scrub: 2
           }
    })


```

Here, 

- ```trigger``` denotes the element we want to trigger on scroll.
- ```scroller``` denotes the element in which the scrolling element under which all the elements which are getting animated reside.
- ```start``` denotes the value of scroller start position
- ```end``` denotes the value of scroller end position
- ```scrub``` is used to animate forward and backward with scroll, not at once. It's value can be either true or false or we can set it between 1 to 5 for smooth animation.
- ```markers``` is used to show the position of the markers which help us to align the animation with page so that the animation will get triggered according to our choosen position.

### Note:
-  The animation will get triggered as soon as the start marker hits the scroller-start  and will run till scroller-end marker position. 