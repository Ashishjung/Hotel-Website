let ul=popmotion.styler(document.getElementById('ul'));
let imagesp=popmotion.styler(document.getElementById('hotelimg'))
let bar=document.getElementById('bar');
let hometext=document.querySelector('.contentbox');
 const {easing,tween,styler}=window.popmotion;
 let isitem=false;
 let showmenu=()=>{
if(!isitem){
    isitem=true;
    return showitem()
}
else{
isitem=false;
 return hideitem()
}
 }
bar.addEventListener('click',showmenu)
function showitem(){
    bar.classList.replace('fa-bars','fa-times')
    tween({
        from:{
            opacity:0,
            ease:easing.linear,
        },
        to:{
            opacity:1
        },
        duration:500,
        delay:1
    }).start(ul.set)
    hometext.classList.add('textcontentadd')
    }
function hideitem(){
    bar.classList.replace('fa-times','fa-bars')
    hometext.classList.remove('textcontentadd')
    document.querySelector('.main-container');
    tween({
        from:{
            opacity:1,
            ease:easing.linear,
        },
        to:{
            opacity:0,
             },
        duration:500,
        delay:1,
    }).start(ul.set)
   }
let imagecollection=[
    "hotel2.jpg",
    'hotel3.jpg',
    "hotel4.jpg",
    "hotel1.jpg"
]
let imageindex=0;
let images=document.getElementById('hotelimg')
function changeimage(){
    if(imageindex<(imagecollection.length-1)){
    tween({
        from:{
            opacity:0,
            ease:easing.linear,
        },
        to:{
opacity:1,
        },
        duration:2000,
    }).start(imagesp.set)
      imageindex++
     
images.src=imagecollection[imageindex]
  }
  else{
      imageindex=0;
  }
}
setInterval(changeimage,5000)
const leftarr=document.getElementById('left-arr');
const rightarr=document.getElementById('right-arr');
const manimage=document.getElementById('man');
const manimageanim=popmotion.styler(document.getElementById('cdetailbox1'));
const manimage2=document.getElementById('girl');
const manimageanim2=popmotion.styler(document.getElementById('cdetailbox2'));
const manimage3=document.getElementById('man2');
const manimageanim3=popmotion.styler(document.getElementById('cdetailbox3'));
const guestname=document.getElementById('p15');
const guestname2=document.getElementById('p17');
const guestname3=document.getElementById('p18');
let circle1=document.getElementById('circle1');
let circle2=document.getElementById('circle2');
let circle3=document.getElementById('circle3');

const listofname=[
    {
        image1:"man.jpg",
        image2:"girl.jpg",
        image3:"man2.jpg ",
        text1:"Greeth Smith <br> Guest from Hwaei",
        text2:"Rose sins <br> Guest from California",
        text3:"Ashish jung <br>Guest from Nepal",
        circlefirst:"#FA8072",
        circlesecond:"rgba(0, 0, 0, 0.425)",
        circlethree:"rgba(0, 0, 0, 0.425)",
    },
    {
        image1:"man3.jpg",
        image2:"girl2.jpg",
        image3:"man4.jpg",
        text1:"Van Diesel <br> Guest from Hollywood",
        text2:"Sunny leone<br> Guest from Canada",
        text3:"Ram <br>Guest from Nepal",
        circlefirst:"rgba(0, 0, 0, 0.425)",
        circlesecond:"#FA8072",
        circlethree:"rgba(0, 0, 0, 0.425)"
    },
    {
    image1:"man5.jpg",
    image2:"girl3.jpg",
    image3:"man6.jpg",
    text1:"Anonymous <br> Guest from Saudi",
    text2:"lela pandey <br> Guest from India",
    text3:"Breandan<br>Guest from Chez",
    circlefirst:"rgba(0, 0, 0, 0.425)",
    circlesecond:"rgba(0, 0, 0, 0.425)",
    circlethree:"#FA8072",
    }
]
function changecontent(changeitem){
guestname.innerHTML=changeitem.text1;
guestname2.innerHTML=changeitem.text2;
guestname3.innerHTML=changeitem.text3;
manimage.src=changeitem.image1;
manimage2.src=changeitem.image2;
manimage3.src=changeitem.image3;
circle1.style.color=changeitem.circlefirst;
circle2.style.color=changeitem.circlesecond;
circle3.style.color=changeitem.circlethree;
}
let imageslistindex=0
rightarr.addEventListener('click',Nextcontent)
function Nextcontent(){
    tween({from:{
            opacity:-5, },
        to:{ opacity:1, },
        duration:900,
    }).start(manimageanim.set)
    tween({from:{
        opacity:-5, },
    to:{ opacity:1, },
    duration:900,
}).start(manimageanim2.set)
tween({from:{
    opacity:-5, },
to:{ opacity:1, },
duration:900,
}).start(manimageanim3.set)
setTimeout(()=>{
    imageslistindex=(imageslistindex+1)%listofname.length;
    changecontent(listofname[imageslistindex])
  },850)
}
let prevcontent=()=>{
imageslistindex=(imageslistindex-1+listofname.length)%listofname.length
changecontent(listofname[imageslistindex])
}
leftarr.addEventListener('click',prevcontent)

let maindish=document.getElementById('Maindish');
let drinks=document.getElementById('drinks');
let desserts=document.getElementById('desserts');
 let foodimage1=document.getElementById('food1');
 let foodimage2=document.getElementById('food2');
 let foodimage3=document.getElementById('food3');
 let foodimage4=document.getElementById('food4');
 let foodimagpop1=popmotion.styler(document.getElementById('food1'));
 let foodimagpop2=popmotion.styler(document.getElementById('food2'));
 let foodimagpop3=popmotion.styler(document.getElementById('food3'));
 let foodimagpop4=popmotion.styler(document.getElementById('food4'));
 let firsttext=document.getElementById('p24');
 let firsttext1=document.getElementById('p27');
 let firsttext2=document.getElementById('p30');
 let firsttext3=document.getElementById('p34');
 const Foodtext1=popmotion.styler(document.getElementById('foodtext1'));
 const Foodtext2=popmotion.styler(document.getElementById('foodtext2'));
 const Foodtext3=popmotion.styler(document.getElementById('foodtext3'));
 const Foodtext4=popmotion.styler(document.getElementById('foodtext4'));

 let juiceimage=[
     "juice1.jpg",
     "juice2.jpg",
     "juice3.jpg",
     "juice4.jpg"
 ]
 let changename=[
     "Lemon Juice",
     "Soda Juice",
     "Stwaberry Juice",
     "Pineapple juice"
]
 const changeintojuice=()=>{
    tween({from:{
        opacity:0, },
    to:{ opacity:1, },
    ease:easing.linear,
    duration:600,
    }).start(foodimagpop1.set)
    tween({from:{
        opacity:0, },
    to:{ opacity:1, },
    ease:easing.linear,
    duration:600,
    }).start(foodimagpop2.set)
    tween({from:{
        opacity:0, },
    to:{ opacity:1, },
    ease:easing.linear,
    duration:600,
    }).start(foodimagpop3.set)
    tween({from:{
        opacity:0, },
    to:{ opacity:1, },
    ease:easing.linear,
    duration:600,
    }).start(foodimagpop4.set)
     foodimage1.src=juiceimage[0];
     foodimage2.src=juiceimage[1];
     foodimage3.src=juiceimage[2];
     foodimage4.src=juiceimage[3];
     firsttext.textContent=changename[0];
     firsttext1.textContent=changename[1];
     firsttext2.textContent=changename[2];
     firsttext3.textContent=changename[3];
     drinks.classList.add("drinksclass");
     desserts.classList.remove('drinksclass');
     drinks.style.color="white";
     desserts.style.color="tomato";
     maindish.style.backgroundColor="rgba(0, 0, 0, 0.11)";
     maindish.style.color="tomato";
     tween({from:{
        opacity:0, },
    to:{ opacity:1, },
    ease:easing.linear,
    duration:600,
}).start(Foodtext1.set)
tween({from:{
    opacity:0, },
to:{ opacity:1, },
ease:easing.linear,
duration:600,
}).start(Foodtext2.set)
tween({from:{
    opacity:0, },
to:{ opacity:1, },
ease:easing.linear,
duration:600,
}).start(Foodtext3.set)
tween({from:{
    opacity:0, },
to:{ opacity:1, },
ease:easing.linear,
duration:600,
}).start(Foodtext4.set)
}
 drinks.addEventListener('click',changeintojuice)
let cakeimage=[
    "cake1.jpg",
    "cake2.jpg",
    "cake3.jpg",
    'cake4.jpg'
]
let cakename=[
    "Chocolate Cake",
    "Honey Cake",
    "Stawberry Cake",
    "Cup Cake"
]
 const changeintocake=()=>{
    tween({from:{
        opacity:0, },
    to:{ opacity:1, },
    ease:easing.linear,
    duration:600,
    }).start(foodimagpop1.set)
    tween({from:{
        opacity:0, },
    to:{ opacity:1, },
    ease:easing.linear,
    duration:600,
    }).start(foodimagpop2.set)
    tween({from:{
        opacity:0, },
    to:{ opacity:1, },
    ease:easing.linear,
    duration:600,
    }).start(foodimagpop3.set)
    tween({from:{
        opacity:0, },
    to:{ opacity:1, },
    ease:easing.linear,
    duration:600,
    }).start(foodimagpop4.set)
drinks.classList.remove('drinksclass');
desserts.classList.add('drinksclass');
desserts.style.color='white';
maindish.style.backgroundColor="rgba(0, 0, 0, 0.11)";
maindish.style.color="tomato";
drinks.style.color='tomato'
tween({from:{
    opacity:0, },
to:{ opacity:1, },
ease:easing.linear,
duration:600,
}).start(Foodtext1.set)
tween({from:{
opacity:0, },
to:{ opacity:1, },
ease:easing.linear,
duration:600,
}).start(Foodtext2.set)
tween({from:{
opacity:0, },
to:{ opacity:1, },
ease:easing.linear,
duration:600,
}).start(Foodtext3.set)
tween({from:{
opacity:-5, },
to:{ opacity:1, },
ease:easing.linear,
duration:600,
}).start(Foodtext4.set)
foodimage1.src=cakeimage[0];
     foodimage2.src=cakeimage[1];
     foodimage3.src=cakeimage[2];
     foodimage4.src=cakeimage[3];
     firsttext.textContent=cakename[0];
     firsttext1.textContent=cakename[1];
     firsttext2.textContent=cakename[2];
     firsttext3.textContent=cakename[3];

 }
 desserts.addEventListener('click',changeintocake)
 let Foodimage=[
    "food1.jpg",
    "food2.jpg",
    "food3.jpg",
    "food4.jpg"
]
let changefoodname=[
    "Grilled Beef",
    "Chicken Roast",
    "Grilled Slat",
    "Veg Burger"
]
maindish.addEventListener('click',function(){
    tween({from:{
        opacity:0, },
    to:{ opacity:1, },
    ease:easing.linear,
    duration:600,
    }).start(foodimagpop1.set)
    tween({from:{
        opacity:0, },
    to:{ opacity:1, },
    ease:easing.linear,
    duration:600,
    }).start(foodimagpop2.set)
    tween({from:{
        opacity:0, },
    to:{ opacity:1, },
    ease:easing.linear,
    duration:600,
    }).start(foodimagpop3.set)
    tween({from:{
        opacity:0, },
    to:{ opacity:1, },
    ease:easing.linear,
    duration:600,
    }).start(foodimagpop4.set)
    drinks.classList.remove('drinksclass');
desserts.classList.remove('drinksclass');

maindish.style.backgroundColor="tomato";
maindish.style.color="white";
desserts.style.color="tomato";
drinks.style.color='tomato'
tween({from:{
    opacity:0, },
to:{ opacity:1, },
ease:easing.linear,
duration:600,
}).start(Foodtext1.set)
tween({from:{
opacity:0, },
to:{ opacity:1, },
ease:easing.linear,
duration:600,
}).start(Foodtext2.set)
tween({from:{
opacity:0, },
to:{ opacity:1, },
ease:easing.linear,
duration:600,
}).start(Foodtext3.set)
tween({from:{
opacity:0, },
to:{ opacity:1, },
ease:easing.linear,
duration:600,
}).start(Foodtext4.set)
foodimage1.src=Foodimage[0];
     foodimage2.src=Foodimage[1];
     foodimage3.src=Foodimage[2];
     foodimage4.src=Foodimage[3];
     firsttext.textContent=changefoodname[0];
     firsttext1.textContent=changefoodname[1];
     firsttext2.textContent=changefoodname[2];
     firsttext3.textContent=changefoodname[3];
})

let name=document.getElementById("name");
let email=document.getElementById('email');
let subject=document.getElementById('subject');
let msg=document.getElementById('Message');
let sendbutton=document.getElementById('sendmsg');
sendmsg.addEventListener('click',function(){
    if(name.value.length<2){
alert('Please write your name')
    }
    else if(email.value.length<2){
        alert('please write your Email')
    }
    else if(email.value.indexOf('@',".")<2){
        alert('please write valid email')
    }
    else if(subject.value.length<3){
        alert('please write subject')
    }
    else if(msg.value.length<3){
        alert('Please write some message')
    }
    else{
        alert(`${name.value} Thanks for Your Message we will get back into this very soon`)
        setTimeout(()=>{
name.value="";
email.value="";
subject.value="";
msg.value="";
        },1000)
    }
})

window.onscroll=function() {myfunction()}
let home=document.getElementById('hom');
let about=document.getElementById('abo');
let blog=document.getElementById('blo');
let resturant=document.getElementById('restu');
let contact=document.getElementById('cont');
let navbar=popmotion.styler(document.getElementById('nav-bar'));
function myfunction(){
    if(document.body.scrollTop>5){
        home.style.color="tomato";
    }
    if(document.body.scrollTop<650){
         about.style.color="rgba(0, 0, 0, 0.753)";
    }
    if(document.body.scrollTop>=650){
        
about.style.color="tomato";
home.style.color="rgba(0, 0, 0, 0.753)";
    }
if(document.body.scrollTop>2550){
    blog.style.color="tomato";
    about.style.color="rgba(0, 0, 0, 0.753)";
}
if(document.body.scrollTop<2550){
    blog.style.color="rgba(0, 0, 0, 0.753)";
}
if(document.body.scrollTop<4400){
    resturant.style.color="rgba(0, 0, 0, 0.753)";
}
if(document.body.scrollTop>4600){
    blog.style.color="rgba(0, 0, 0, 0.753)";
    resturant.style.color="tomato";
}
if(document.body.scrollTop<7400){
    contact.style.color="rgba(0, 0, 0, 0.753)";
}
if(document.body.scrollTop>7500){
    resturant.style.color="rgba(0, 0, 0, 0.753)"
    contact.style.color="tomato";
}
}