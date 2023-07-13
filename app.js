const tl = gsap.timeline({defaults: {duration: 0.8}})
tl.fromTo('.cookie-container', {scale: 0}, {scale:1, ease:"elastic.out(1, 0.3)"})
tl.fromTo('.cookie', {opacity:0, x:-30, rotation:'-45deg'}, {opacity:1, x:0, rotation: '0deg', ease: "elastic.out(1, 0.3)", duration: 1.5}, '<50%')/*if you add duration here then it'll be prioritized over the one of tl*/
tl.fromTo('.text' , {opacity: 0, y:40}, {opacity: 1,y:0}, '<') /* the '<' to sync up with the previous animation */
const button = document.querySelector('button');
button.addEventListener('mouseover', () => {
    gsap.to('button', {y: -2, duration: 0.1, color: 'black'});
})
button.addEventListener('mouseout', () => { // Change 'hover' to 'mouseout' or 'mouseleave'
    gsap.to('button', { y: 0, duration: 0.1, color: '#9b6c50'});
  });
button.addEventListener('click', () => {
    gsap.to('.cookie-container', {opacity:0, y:90 , ease: 'power1.out'});
})
