function toggle(){
    var bg = document.querySelector("section");
    bg.classList.toggle("active");
}

const tl = gsap.timeline({
    defaults: {
        ease: "power2.out"
    }
});
tl.fromTo(".h1animate",{
    y: "100%",
    opacity: 0
},{
    duration: 2,
    y: "0%",
    opacity: 1,
    ease: "power1.out"
});
tl.to(".animation" , {
    duration: 2.5,
    opacity: 0,
    display: "none",
    ease: "power1.out"
},"+=1");
tl.fromTo(".p",{
    y: "100%",
    opacity: 0
},{
    duration: 1.5,
    y: "0%",
    opacity: 1
},"-=1");
tl.fromTo(".heroImg",{
    y: "100%"
},{
    duration: 1,
    y: "0%",
    opacity: 1,
    ease: "power1.in"
},"-=3");
tl.fromTo(".logo",{
    y: "100%",
    opacity: 0
},{
    duration: 1,
    y: "0%",
    opacity: 1
},"-=0.5");
tl.fromTo(".theme",{
    y: "100%",
    visibilty: "none"
},{
    duration: 2,
    y: "0%",
    visibilty: "visible"
},"-=1.5");
tl.fromTo(".social , .ul",{
    y: "100%",
    opacity: 0
},{
    duration: 2,
    y: "0%",
    opacity: 1,
    delay: 0.25,
    stagger: 0.25
},"-=1");