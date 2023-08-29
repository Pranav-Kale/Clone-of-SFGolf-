let cursor = document.querySelector("#cursor");
let blur = document.querySelector("#blur");

document.addEventListener("mousemove" , function(dets){
    // console.log(dets)
    cursor.style.left = dets.x  + "px"
    cursor.style.top = dets.y   + "px"
    blur.style.left = dets.x - 200 + "px"
    blur.style.top = dets.y - 200 + "px"
})

// let allh4 = document.querySelectorAll("#nav h4");
let allh4 = Array.from(document.querySelectorAll("#nav"));
allh4.forEach(function(element)
{
    element.addEventListener("mouseenter",function(){
        cursor.style.scale = 1;
        cursor.style.border = "3px solid #dc143c";
        cursor.style.backgroundColor = "transparent";
    })

    element.addEventListener("mouseleave",function(){
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #B3E824";
        cursor.style.backgroundColor = "#B3E824";
    })
})

gsap.to("#nav",{
    backgroundColor : "#000",
    duration : 0.5,
    height : "110px",
    delay : 1,
    scrollTrigger : {
        trigger : "#nav",
        scroller : "body",
        // markers : true,
        start : "top -10%",
        end : "top -11%",
        scrub : 1
    }
})

gsap.to("#main", {
    backgroundColor : "black",
    scrollTrigger : {
        trigger : "#main",
        scroller : "body",
        // markers : true,
        start : "top -1%",
        end : "top -60%",
        scrub : 1
        }
})

gsap.from("#about-us img,#about-us-in",{
    y : 120,
    opacity : 0,
    duration : 1,
    // stagger : 0.1,
    scrollTrigger : {
        trigger : "#about-us",
        scroller : "body",
        // markers : true,
        start : "top 70%",
        end : "top 65%",
        scrub : 2
    }
})

gsap.from(".card",{
    y : 50,
    scale : 1,
    duration : 0.5,
    // opacity : 0,
    stagger : 0.1,
    scrollTrigger : {
        trigger : ".card",
        scroller : "body",
        // markers : "true",
        start : "top 70%",
        end : "top 65%",
        scrub : 2
    }
})

gsap.from(".card",{
    scale : 0.8,
    duration : 1,
    opacity : 0,
    stagger : 0.1,
    scrollTrigger : {
        trigger : ".card",
        scroller : "body",
        // markers : "true",
        start : "top 70%",
        end : "top 65%",
        scrub : 2
    }
})

gsap.from("#upperHash",{
    y : -70,
    x : -70,
    scrollTrigger : {
        trigger : "#upperHash",
        scroller : "body",
        start : "top 70%",
        end : "top 65%",
        scrub : 4
    }
})

gsap.from("#lowerHash",{
    y : 70,
    x : 70,
    scrollTrigger : {
        trigger : "#upperHash",
        scroller : "body",
        start : "top 70%",
        end : "top 65%",
        scrub : 4
    }
})

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });











