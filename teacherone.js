//cursor
const coords={x:0,y:0};
const circles=document.querySelectorAll(".circle");
const svg=document.querySelector(".cursor img")
let timer;

svg.style.visibility="hidden";

circles.forEach((circle, index)=>{
    //console.log(circle)
    circle.x=0;
    circle.y=0;
})

window.addEventListener("mousemove",function(e){
    coords.x=e.clientX - 12;
    coords.y=e.clientY - 12;

   clearTimeout(timer)

   svg.style.visibility="hidden";
   circles.forEach((circle)=>{
    circle.style.display='block';
})

    

    //setTimeout(function(){},�쒓컙)//�쒓컙留뚰겮 吏��섎㈃ �좎씪�� �쒕쾲 �ㅽ뻾��
    timer=setTimeout(function(){
        circles.forEach((circle)=>{
            circle.style.display='none';
            svg.style.visibility="visible";
            svg.style.display="block"
        })
    },500)
})


function animateCircles(){
    let x=coords.x;
    let y=coords.y;

    circles.forEach((circle,index)=>{
        circle.style.left=x +"px";
        circle.style.top=y +"px";

        let len=circles.length * 2;
        circle.style.scale=((len - index) / len) * window.innerWidth / 1400;


        circle.x=x;
        circle.y=y;

        let nextCircle=circles[index + 1] || circles[0]
        x +=(nextCircle.x - x)*0.1;
        y +=(nextCircle.y - y)*0.1;
        //console.log(x)
    })

   
    requestAnimationFrame(animateCircles)
}
animateCircles()


//  100        200
//  x =(nextCircle.x - x)*0.1 + x;
//  x = (100 - 200) *0.1 + 200 = 190


//  x = (100 - 190) *0.1 + 190 = 181

//Theme Changer
let themeChanger = ()=>{
    let offsets=document.querySelector("#theme-changer").getBoundingClientRect();
    //console.log(offsets)
    document.body.style.backgroundColor=offsets.top<0?"#fff":"#0e0e0e";
}
window.addEventListener("scroll",themeChanger)
window.addEventListener("load",themeChanger)

//Video
//<iframe src="" frameborder="0" autoplay loof></iframe>
//allow="autoplay;"    allow�� iframe 肄섑뀗痢좎뿉 �뱀젙湲곕뒫�� �덉슜�섎뒗 ��븷
let video=document.querySelector(".video");
video.addEventListener("click",()=>{
    video.innerHTML=`<iframe src="https://player.vimeo.com/video/764513434?color=ffffff&badge=0&title=0&byline=0&portrait=0&loop=1&autoplay=1&api=1" frameborder="0" allow="autoplay" ></iframe>`;
    video.classList.add("video-added")
})




// animation

const hiddenElement = document.querySelectorAll("p");
const hiddenElement1 = document.querySelectorAll("h1");
const hiddenElement2 = document.querySelectorAll("h2");
const hiddenElement3 = document.querySelectorAll("h3");
const hiddenElement4 = document.querySelectorAll("a");
const hiddenElement5 = document.querySelectorAll("button");

let observer=new IntersectionObserver((entries)=>{
 //console.log(entries)
 entries.forEach((entry)=>{
    if(entry.isIntersecting){//�붾㈃�� �섑��щ떎硫� true
        console.log(entry.isIntersecting)
        entry.target.classList.add("show")
    }else{
        entry.target.classList.remove("show")
    }
 })
})

//愿�李곕��� �깅줉
hiddenElement.forEach((el)=>observer.observe(el))
hiddenElement1.forEach((el)=>observer.observe(el))
hiddenElement2.forEach((el)=>observer.observe(el))
hiddenElement3.forEach((el)=>observer.observe(el))
hiddenElement4.forEach((el)=>observer.observe(el))
hiddenElement5.forEach((el)=>observer.observe(el))
//--------------------------------------------





const nav = document.querySelector("nav");
const hero = document.querySelector(".hero");
const partners = document.querySelector(".partners");
const skills = document.querySelector(".skills");
const feelOurVibe = document.querySelector(".feelOurVibe");
const mission = document.querySelector(".mission");
const feelTheReel = document.querySelector(".feelTheReel");
const experts = document.querySelector(".experts");
const footer = document.querySelector("footer");
const menuButton = document.querySelector(".menuButton");

const _cursor = document.querySelector(".cursor");
// Menubar
let close=document.querySelector(".close")
let closeWrapper=document.querySelector(".closeWrapper")

let openHandler=()=>{
    nav.style.right=0;
    closeWrapper.style.display="block";
    document.documentElement.style.overflow="hidden"
}

let closeHandler=()=>{
    nav.style.right="-100%";
    closeWrapper.style.display="none";
    document.documentElement.style.overflow="auto"
}



// close.addEventListener("click",function(){
//     closeHandler()
// })
close.addEventListener("click",closeHandler)
menuButton.addEventListener("click",openHandler)
closeWrapper.addEventListener("click",closeHandler)
nav.querySelectorAll("*").forEach((ele)=>{
    ele.addEventListener("click",closeHandler)
})


// *****Responsive*****

const responsive = () => {
    const _innerWidth = window.innerWidth;
  
    if (_innerWidth <= 640) {
      nav.style.zoom = 1;
      hero.style.zoom = _innerWidth / 640;
      partners.style.zoom = _innerWidth / 640;
      skills.style.zoom = (_innerWidth / 640) * 1.5;
      feelOurVibe.style.zoom = (_innerWidth / 640) * 1.5;
      mission.style.zoom = (_innerWidth / 640) * 1.5;
      feelTheReel.style.zoom = (_innerWidth / 640) ;
      experts.style.zoom = (_innerWidth / 640) * 1.6 ;
      footer.style.zoom = (_innerWidth / 640) * 1.3 ;
      menuButton.style.zoom = (_innerWidth / 640) * 1.3 ;
  
      _cursor.style.display = "none";
    } else if (_innerWidth < 900) {
      //  900 > case < 640
      nav.style.zoom = _innerWidth / 900;
      hero.style.zoom = 1;
      partners.style.zoom = 1;
      skills.style.zoom = _innerWidth / 900;
      feelOurVibe.style.zoom = (_innerWidth / 900) * 1.2;
      mission.style.zoom = _innerWidth / 900;
      feelTheReel.style.zoom = _innerWidth / 900;
      experts.style.zoom = _innerWidth / 900;
      footer.style.zoom = _innerWidth / 900;
  
      _cursor.style.display = "block";
    } else if (_innerWidth <= 1200) {
      //  1200 > case < 900
      nav.style.zoom = _innerWidth / 1200 + 0.3;
      hero.style.zoom = (_innerWidth / 1200) * 1.4;
      partners.style.zoom = (_innerWidth / 1200) * 1.4;
      skills.style.zoom = (_innerWidth / 1200) * 1.4;
      feelOurVibe.style.zoom = (_innerWidth / 1200) * 1.6;
      mission.style.zoom = (_innerWidth / 1200) * 1.4;
      feelTheReel.style.zoom = _innerWidth / 1200;
      experts.style.zoom = _innerWidth / 1200 * 1.4;
      footer.style.zoom = _innerWidth / 1200 * 1.3;
  
      _cursor.style.display = "block";
    } else if (_innerWidth <= 1400) {
      //  1400 > case < 1200
      nav.style.zoom = _innerWidth / 1400;
      hero.style.zoom = _innerWidth / 1400 - 0.1;
      partners.style.zoom = _innerWidth / 1400 - 0.1;
      skills.style.zoom = _innerWidth / 1400;
      feelOurVibe.style.zoom = _innerWidth / 1400;
      mission.style.zoom = _innerWidth / 1400;
      feelTheReel.style.zoom = _innerWidth / 1400;
      experts.style.zoom = _innerWidth / 1400;
      footer.style.zoom = _innerWidth / 1400;
  
      _cursor.style.display = "block";
    } else {
      // over 1400 px
      nav.style.zoom = _innerWidth / 1400;
      hero.style.zoom = (_innerWidth / 1400) * 0.9;
      partners.style.zoom = _innerWidth / 1400;
      skills.style.zoom = _innerWidth / 1400;
      feelOurVibe.style.zoom = _innerWidth / 1400;
      mission.style.zoom = _innerWidth / 1400;
      feelTheReel.style.zoom = _innerWidth / 1400;
      experts.style.zoom = _innerWidth / 1400;
      footer.style.zoom = _innerWidth / 1400;
  
      _cursor.style.display = "block";
    }
  };
  
  window.addEventListener("resize", ()=>{
    responsive()
    closeHandler()
  });
  window.addEventListener("load", responsive);


  //svg animation
   const pics = document.querySelectorAll(".animation_wrapper img");

   const play = (elem, _class) => elem.classList.add(_class);
   const stop = (elem) => elem.classList.add("end");
   const reset = (elem, _class) => elem.classList.remove("end", _class);
   const stopHandler = (elem, i) => {
     stop(elem);
     elem.addEventListener(
       "animationend",//animationend  : 마우스를 다시 뗀후, 실행이 안되서 리셋되도록함 
       () => {
         reset(elem, `move${i}`);
       },
       
     );
   };
 
   pics.forEach((ele,i)=>{
     ele.addEventListener("mouseenter",()=>{
         play(ele,`move${i}`)
     })
     ele.addEventListener("mouseleave",()=>{
         stopHandler(ele,i)
     })
   })