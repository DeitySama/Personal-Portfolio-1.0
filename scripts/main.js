window.addEventListener('load',e=>{
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('preloaderfinish');
  //Hero load animation
  $('document').ready(function(){
    $('html').css('display','block');
    gsap.from('.header',{duration:0.6, y:'-100%', opacity:0});
    gsap.from('.hero-text',{duration:0.6, y:'-10%', opacity:0, delay:0.5, ease:'back'});
    gsap.from('.mybtn',{duration:0.6, y:'50%', opacity:0, delay:1, ease:'back'});
    gsap.from('.mouse',{duration:0.6, y:'100%', opacity:0, delay:1.5, ease:'back'});
  })
})

const sidemenu = document.querySelector('.sidemenu');
//Hamburger Animation
class burgerAnimation {
	constructor() {
		this.controlit = document.querySelector('#burger')
    this.menuToggle = new TimelineMax({paused:true, reversed:true});
	}

	init() {
		this.menuToggle
			.set(this.controlit, {class:"-=closemenu"})
			.set(this.controlit, {class:"+=openmenu"})
			.to(' .top', .2, {y:'-9px', transformOrigin: '50% 50%'}, 'burg')
			.to(' .bot', .2, {y:'9px', transformOrigin: '50% 50%'}, 'burg')
			.to(' .mid', .2, {scale:0.1, transformOrigin: '50% 50%'}, 'burg')
			.add('rotate')
			.to(' .top', .2, {y:'5'}, 'rotate')
			.to(' .bot', .2, {y:'-5'}, 'rotate')
			.to(' .top', .2, {rotationZ:45, transformOrigin: '50% 50%'}, 'rotate')
			.to(' .bot', .2, {rotationZ:-45, transformOrigin: '50% 50%'}, 'rotate')

		this.controlit.addEventListener('click', () => {
      gsap.from(sidemenu,{duration:0.6, x:'10%', opacity:0, delay:0.5, ease:'back'});
      if(this.menuToggle.reversed())
      {
        sidemenu.style.right=0;
        sidemenu.style.boxShadow="-300px 0px 500px rgba(238, 238, 238, 0.466)";
        $('body').addClass('haltscroll');
        this.menuToggle.restart() 
      }
      else{ 
        sidemenu.style.right="-100%";
        sidemenu.style.boxShadow="";
        $('body').removeClass('haltscroll');
        this.menuToggle.reverse();
      }
		})
	}
}
const animation = new burgerAnimation()
animation.init()




const ctrl = new ScrollMagic.Controller();
 
const scrollLoad =(id)=>{
   // Create scenes in jQuery each() loop
   $(id).each(function(i) {
     const inner = $(this).find(id+"-image");
     const outer = $(this).find(id+"-text");
     const tl = new TimelineMax();
     
     tl.from(outer,{ duration:0.4, opacity:0, x:'-5%',ease:'back'});
     tl.from(inner,{  duration:0.4,y:'10%', opacity:0, ease:'back'});
     
     new ScrollMagic.Scene({
       triggerElement: this,
       triggerHook: 0.15
     })
       .setTween(tl)
       .addTo(ctrl);
   });
 }

 scrollLoad('.project');
 

const controller = new ScrollMagic.Controller();
const tl = new TimelineMax();

// tl.fromTo(
//   ".hero",
//   1,
//   { yPercent: 100 },
//   { yPercent: 0, ease: Linear.easeNone },
//   "+=1"
// );

new ScrollMagic.Scene({
  triggerElement: "#pinMaster",
  triggerHook: 0,
})
  .setPin("#pinMaster")
  .addTo(controller);


  new ScrollMagic.Scene({
    triggerElement: ".footer",
    triggerHook: 1,
    duration:'200%'
  })
    .setTween(TweenMax.from('.bcg',1,{y:'-30%', ease:Power0.easeNone}))
    .addTo(controller);


    const skewEffect=(className)=>{
      let proxy = { skew: 0 },
       skewSetter = gsap.quickSetter(className, "skewY", "deg"), 
       clamp = gsap.utils.clamp(-50, 50); 
     
     ScrollTrigger.create({
     onUpdate: (self) => {
       let skew = clamp(self.getVelocity() / -300);
     
       if (Math.abs(skew) > Math.abs(proxy.skew)) {
         proxy.skew = skew;
         gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
       }
     }
     });
    }


    skewEffect('.mini-project');
    skewEffect('.text-box');
    skewEffect('.headline');
    skewEffect('.blob');

gsap.set(".mini-project", {transformOrigin: "right center", force3D: true});
gsap.set(".text-box", {transformOrigin: "right center", force3D: true});
gsap.set(".headline", {transformOrigin: "right center", force3D: true});
gsap.set(".blob", {transformOrigin: "right center", force3D: true});

// cursor

const cursor = document.querySelector('.cursor');
const follow = document.querySelector('.follow');
const sideItemLink = document.querySelectorAll('.side-item-link');

sideItemLink.forEach(item=>{
  item.addEventListener('mouseleave',(e)=>{
    follow.classList.remove("follow-grow");
    item.classList.remove("hovered-link");
  })

  item.addEventListener('mouseover',(e)=>{
    follow.classList.add("follow-grow");
    item.classList.add("hovered-link");
  })
})


const menuToggle = document.querySelector('.menu-toggle')

menuToggle.addEventListener('mouseleave',(e)=>{
  follow.classList.remove("follow-grow");
})

menuToggle.addEventListener('mouseover',(e)=>{
  follow.classList.add("follow-grow");
})

window.addEventListener('mousemove', (e)=>{
  cursor.style.top= follow.style.top = e.pageY+'px';
  cursor.style.left= follow.style.left = e.pageX+'px';
});


TweenMax.set( '.project-image', { transformStyle: 'preserve-3d'  });
	
$('body').mousemove(function(e) {
   var sxPos =  e.pageX / $('body').width()  * 100 - 50;
  var syPos =  e.pageY / $('body').height() * 100 - 50;
  TweenMax.to( ".project-image", 1, { rotationY: 0.15 * sxPos, rotationX: 0.20 * syPos, rotationZ: '-0.1', transformPerspective:500, transformOrigin:'center center' });
});







//average color


//document.body.style.backgroundColor = 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')';

function getAverageRGB(imgEl) {

var blockSize = 5, // only visit every 5 pixels
    defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
    canvas = document.createElement('canvas'),
    context = canvas.getContext && canvas.getContext('2d'),
    data, width, height,
    i = -4,
    length,
    rgb = {r:0,g:0,b:0},
    count = 0;
    
if (!context) {
    return defaultRGB;
}

height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

context.drawImage(imgEl, 0, 0);

try {
    data = context.getImageData(0, 0, width, height);
} catch(e) {
    /* security error, img on diff domain */alert('x');
    return defaultRGB;
}

length = data.data.length;

while ( (i += blockSize * 4) < length ) {
    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i+1];
    rgb.b += data.data[i+2];
}

// ~~ used to floor values
rgb.r = ~~(rgb.r/count);
rgb.g = ~~(rgb.g/count);
rgb.b = ~~(rgb.b/count);

return rgb;

}




//View port view monitor
const projects = document.querySelectorAll('.project');
function VisibilityMonitor(element, showfn, hidefn) {
  var isshown= false;
  function check() {
      if (rectsIntersect(getPageRect(), getElementRect(element)) !== isshown) {
          isshown= !isshown;
          isshown? showfn() : hidefn();
      }
  };
  window.onscroll=window.onresize= check;
  check();
}

function getPageRect() {
  var isquirks= document.compatMode!=='BackCompat';
  var page= isquirks? document.documentElement : document.body;
  var x= page.scrollLeft;
  var y= page.scrollTop;
  var w= 'innerWidth' in window? window.innerWidth : page.clientWidth;
  var h= 'innerHeight' in window? window.innerHeight : page.clientHeight;
  return [x, y, x+w, y+h];
}

function getElementRect(element) {
  var x= 0, y= 0;
  var w= element.offsetWidth, h= element.offsetHeight;
  while (element.offsetParent!==null) {
      x+= element.offsetLeft;
      y+= element.offsetTop;
      element= element.offsetParent;
  }
  return [x, y, x+w, y+h];
}

function rectsIntersect(a, b) {
  return a[0]<b[2] && a[2]>b[0] && a[1]<b[3] && a[3]>b[1];
}

const featureSpace = document.getElementById('featureSpace');

projects.forEach(project=>{

  let img =project.querySelector('.pr-img');

  VisibilityMonitor(
  project,
    function() {
        featureSpace.style=`background-color:rgb(${rgb.r},${rgb.g},${rgb.b}); transition:4s ease-in-out;`;
        console.log(rgb);
    },
    function() {
      featureSpace.style.background=`white`;
    }
  );

})



const prImg = document.querySelectorAll('.pr-img');

prImg.forEach(item=>{
  item.addEventListener('mouseleave',(e)=>{
    follow.classList.remove("follow-view");
    follow.innerHTML=``;
  })

  item.addEventListener('mouseover',(e)=>{
    follow.classList.add("follow-view");
    follow.innerHTML =`View`;
  })
})



//time dark Mode
const currTime = new Date().getHours();
const img = document.querySelectorAll('img');
const subs = document.querySelectorAll('.subs');


const darkmode = ()=>{
  $('html').css("filter","invert(1)");
  
  $('.footer').css("filter","invert(1)");
  $('.footer').css("background","#2e2e2e ");  
  img.forEach(item=>{
    item.style.filter= "invert(1)";
  })
  subs.forEach(item=>{
    item.style.filter= "invert(1)";
  })
  $('.footer-emo').css("filter","invert(0)");
};

const lightmode = ()=>{
  $('html').css("filter","none");
  
  $('.footer').css("filter","none");
  $('.footer').css("background","black ");  
  img.forEach(item=>{
    item.style.filter= "none";
  })
  subs.forEach(item=>{
    item.style.filter= "none";
  })
  $('.footer-emo').css("filter","none");
};


const darklight = document.getElementById('darklight');


darklight.addEventListener("click",e=>{
  let mode = e.target.getAttribute('data-mode');
  if(mode === ""){
    darkmode();
    darklight.innerHTML=`<i class="fa fa-sun-o" aria-hidden="true"></i>`;
    e.target.setAttribute('data-mode',"light")
  }

  if(mode ==="light"){
    lightmode();
    darklight.innerHTML=`<i class="fa fa-moon-o" aria-hidden="true"></i>`;
    e.target.setAttribute('data-mode',"")
  }
})