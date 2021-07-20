// header
gsap.from('#header-img-animacion',{duration:2,x:100,ease: 'power4'});
gsap.from('.header-text-animacion',{duration:2,x:-50,ease: 'power4'});
// skillset
gsap.to('.menu-bajo',{
    duration:0.9,
    y:7,
    repeat:-1,
    ease: 'power4',
    yoyo:true
});
// movimientos de objetos
const textAnimation = document.querySelector('.text-animation');
const textAnimationDos = document.querySelector('.text-animation-2');
const textAnimationTres = document.querySelector('.text-animation-3');

const tl = gsap.timeline({
    scrollTrigger:{trigger:'.article-cuarto',start: 'center button',}
});
const tlDos = gsap.timeline({
    scrollTrigger:{trigger:'.hr',start: 'center button',}
});

tl.from(textAnimation,{x:-800,opacity:0.1})
.from(textAnimationDos,{translateX:-300,opacity:0.1});
tlDos.from(textAnimationTres,{translateX:-300,opacity:0.3,});