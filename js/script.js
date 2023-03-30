const nav=document.querySelector("nav")
const menuBtn=document.querySelector(".hidden-block")
const darkBlock=document.querySelector(".dark-block")
const leftBtn=document.querySelector(".left-btn img")
const blockItem=document.querySelector(".dark-block-item")
const card1=document.querySelector(".card-1")
const hiddenCard1=document.querySelector(".hidden-card-1")
const card2=document.querySelector(".card-2")
const hiddenCard2=document.querySelector(".hidden-card-2")
const card1Direc=document.getElementById("card-1")
const hiddenCard1Direc=document.getElementById("hidden-card-1")
const card2Direc=document.getElementById("card-2")
const hiddenCard2Direc=document.getElementById("hidden-card-2")
const imgs=document.querySelector(".img-container")
const left=document.getElementById("left")
const right=document.getElementById("right")
const cards=document.querySelectorAll(".carousel-card")
const cardImgs=document.querySelectorAll(".carousel-card img")


window.addEventListener("scroll",()=>{
    if (window.scrollY>0) {
        nav.classList.add("active")
    }
    else{
        nav.classList.remove("active")
    }
})
menuBtn.addEventListener("click",()=>{
    darkBlock.classList.add("active")
    setTimeout(() => {
        blockItem.style.transform=" translateY(0)";
    }, 500);
    setTimeout(() => {
        darkBlock.style.transform="translateY(0)"
    }, 400);
})
leftBtn.addEventListener("click",()=>{
    setTimeout(() => {
        darkBlock.classList.remove("active")
    }, 500);
    setTimeout(() => {
        darkBlock.style.transform="translateY(0)"
    }, 300);
    setTimeout(() => {
        blockItem.style.transform=" translateY(-100%)";
    }, 300);

})
card1.addEventListener("mouseover",()=>{
    card1.classList.add("active")
    hiddenCard1.classList.add("active")
})
hiddenCard1.addEventListener(("mouseleave"),()=>{
    card1.classList.remove("active")
    hiddenCard1.classList.remove("active")
})
card2.addEventListener("mouseover",()=>{
    card2.classList.add("active")
    hiddenCard2.classList.add("active")
})
hiddenCard2.addEventListener("mouseleave",()=>{
    card2.classList.remove("active")
    hiddenCard2.classList.remove("active")
})
card1Direc.addEventListener("mouseover",()=>{
    card1Direc.classList.add("active")
    hiddenCard1Direc.classList.add("active")
})
hiddenCard1Direc.addEventListener(("mouseleave"),()=>{
    card1Direc.classList.remove("active")
    hiddenCard1Direc.classList.remove("active")
})
card2Direc.addEventListener("mouseover",()=>{
    card2Direc.classList.add("active")
    hiddenCard2Direc.classList.add("active")
})
hiddenCard2Direc.addEventListener(("mouseleave"),()=>{
    card2Direc.classList.remove("active")
    hiddenCard2Direc.classList.remove("active")
})


let idx=0;

const changeImage=()=>{
    if (idx>cardImgs.length-1) {
        idx=0;
    }else if (idx<0) {
        idx=cardImgs.length-1;
    }
    cards.forEach(card=>{
        card.style.transform = `translateX(${-idx*550}px)`;
    })
}
right.addEventListener("click",()=>{
    idx++
    resetInterval()
    changeImage()
    console.log("right");
    right.classList.add("active")
    left.classList.remove("active")
})
left.addEventListener("click",()=>{
    idx--
    resetInterval()
    changeImage()
    console.log("left");
    left.classList.add("active")
    right.classList.remove("active")
})

const run=()=>{
    idx++;
    changeImage()


}
const resetInterval=()=>{
    clearInterval(interval)
    interval=setInterval(() => {
        run()
    }, 6000); 
}
let interval=setInterval(() => {
    run()
}, 6000);

document.addEventListener("DOMContentLoaded",init)

function init(){
    let query=window.matchMedia("(max-width:576px)")
    if (query.matches) {
        let idx=0;

        const changeImage=()=>{
            if (idx>cardImgs.length-1) {
                idx=0;
            }else if (idx<0) {
                idx=cardImgs.length-1;
            }
            cards.forEach(card=>{
                card.style.transform = `translateX(${-idx*417}px)`;
            })
        }
        right.addEventListener("click",()=>{
            idx++
            resetInterval()
            changeImage()
            console.log("right");
            right.classList.add("active")
            left.classList.remove("active")
        })
        left.addEventListener("click",()=>{
            idx--
            resetInterval()
            changeImage()
            console.log("left");
            left.classList.add("active")
            right.classList.remove("active")
        })
        
        const run=()=>{
            idx++;
            changeImage()
        
        
        }
        const resetInterval=()=>{
            clearInterval(interval)
            interval=setInterval(() => {
                run()
            }, 6000); 
        }
        let interval=setInterval(() => {
            run()
        }, 6000);

        // Dragging 
    }
}