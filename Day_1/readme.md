## GSAP

There are two methods in GSAP : 
- gsap.to()
- gsap.from()

```gsap.to()``` is used to move the animation in forward direction.

```gsap.from()``` is used to move the animation in backward direction.

Inside the curly braces we pass two parameters. First parameter is the element in which we want to apply the animation and is written same as we write in css.
Second parameter is the object inside which we write the properties that we want to apply.


```

         gsap.to("#box",{
             x:700,
             y:300,
             duration: 3,
             delay:1,
             backgroundColor: "blue",
             rotate: 360,
             scale: 0.5
         })
```

The above code will apply animation on the element with id box. The animation will move the elements to 700px in x direction, 300px in y direction with duration of 3 seconds and dealy of 1 second. During animation the background color of the element will change to blue and will also rotate 360 degree with a zoom out of scale 0.5.

```
         gsap.from("#box",{
             x:700,
             y:300,
             duration: 3,
             delay:1,
             backgroundColor: "blue",
             rotate: 360,
             scale: 0.5
         })
```

Similarly the above code will work but in reverse direction.

If there are three h1 elements and we apply the animation on those and we want them to move one after another after a certain duration then we use a property called ```stagger``` which takes time in seconds.

```
         gsap.to("h1", {
             x: 700,
             color: "orange",
             duration: 3,
             delay: 1,
             stagger: 0.5,
             repeat: 1,
             yoyo: true
         })
```

Here the elments are moving one after another independently but we want them to move one after another means the next element should start animating once if the previous one finished and for this we use ```timeline```.

```
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
```

Here the syntax works same but only difference is that we stored gsap.timeline() into a variable and we used the ```.to()``` method with the help of that variable name.

This will allow each element to move one after another synchronously.
