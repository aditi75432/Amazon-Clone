let right=document.querySelector(".right-btn");
let left= document.querySelector(".left-btn");


right.addEventListener("click" , () => {
    let slide=document.querySelector(".slide-carousel");
     slide.scrollLeft+=1100;
}
);

left.addEventListener("click" , () => {
    let slide=document.querySelector(".slide-carousel");
    slide.scrollLeft-=1100;
}
);