var controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline.to('.girl',3,{opacity:0,y:750})
.to(".title",3,{opacity:0},'-=3')
.fromTo('.rock',3,{y:250},{y:0,duration:3},"+=3")
.fromTo('.content-images',{opacity:0,y:200},{opacity:1,duration:5,y:0})


let scene = new ScrollMagic.Scene({
    triggerElement :'section',
    duration :'120%', //or (100-200-300...)
    triggerHook :0, //OR  0 = onLeave /0.5 =onCenter /1 =onEnter
}).setTween(timeline).setPin('.section').addTo(controller);


/*
timeline.from('.text',5,{opacity:0})
.from('.content-images',5,{opacity:0},'-=3');

timeline.to('.girl',3,{y:750,opacity:0},'-=5');


*/