gsap.timeline({
    scrollTrigger: {
        trigger: ".box",
        // Animation starts at this point
        start: "top bottom",  
        // Animation ends at this point
        end: "bottom top", 
        markers: false,
        scrub:  true,
        pin:  true
    }
})
.from(".text0", { x : innerWidth * 1})
.from(".text0", { x : innerWidth * 1})
.from(".text0", { x : innerWidth * 1})
.from(".text11", { x : innerWidth * -1})
.from(".text12", { x : innerWidth * -1})
.from(".text0", { x : innerWidth * 1})
.from(".logo", { 
    y : innerHeight * 1,
    rotate : 360
})

gsap.timeline({
    scrollTrigger: {
        trigger: ".box2",
        // Animation starts at this point
        start: "top top", 
        // Animation ends at this point
        end: "bottom top", 
        markers: false,
        scrub:  true,
        pin:  true
    }
})
.from(".box2", { opacity : 0 })
.from(".text0", { y : innerHeight * 1})
.from(".text0", { y : innerHeight * -1})
.from(".text0", { y : innerHeight * 1})