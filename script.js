// gsap.from('header',{duration:0.6,ease:"power2. out",y:-60});
// gsap.from('.hero-content',{duration:0.6,ease:"power2.out",opacity:0,y:-40,delay:1});
// gsap.from('.illustrations',{duration:0.6,ease:"power2.out",opacity:0,delay:1.7});

// another method is by using gsap timeline

let timeline1 =gsap.timeline({delay:1});
timeline1.from('header',{duration:0.6,ease:"power2. out",y:-60});
timeline1.from('.hero-content',{duration:0.6,ease:"power2.out",opacity:0,y:-40});
timeline1.from('.illustrations',{duration:0.6,ease:"power2.out",opacity:0});

gsap.to("#red-car",{
    duration:5,
    x:1975,//for movrment on road
    y:430,//for left and right side on road
    ease:"none",
    repeat:4,
    repeatDelay:2,

})
gsap.to("#blue-car",{
    duration:7,//for speed
    x:700,//for movrment on road
    y:234,//for left and right side on road
    ease:"none",
    repeat:5,//how many times the car should keep moving
    repeatDelay:1,

})
// gsap.to("#yellow-car",{
//     duration:7,
//     x:884,//for movrment on road
//     y:1114,//for left and right side on road
//     ease:"none",
//     repeat:4,
//     repeatDelay:1,

// })

