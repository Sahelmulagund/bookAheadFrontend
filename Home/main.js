 
// const locationBox = document.getElementById("location_box");
// var isHidden = true;
// function showLocation(){
//    if(isHidden){
    
//     locationBox.style.display="flex";
//     isHidden = false;
//    }else{
    
    
//     locationBox.style.display="none";
//     isHidden = true;
//    }
//   // const txt = `<h1>Hi</h1>`;
//   // locationBox.innerHTML = txt;
// }
checkUserLoginStatus();
const popular_cities = [
  {

   img:"//in.bmscdn.com/m6/images/common-modules/regions/mumbai-selected.png",
   name:"Mumbai"
},
{

  img:"//in.bmscdn.com/m6/images/common-modules/regions/bang.png",
  name:"Bengaluru"
},
{

  img:"//in.bmscdn.com/m6/images/common-modules/regions/hyd.png",
  name:"Hyderabad"
},
{

  img:"//in.bmscdn.com/m6/images/common-modules/regions/ahd.png",
  name:"Ahemdabad"
},
{

  img:"//in.bmscdn.com/m6/images/common-modules/regions/chen.png",
  name:"Chennai"
},
{

  img:"//in.bmscdn.com/m6/images/common-modules/regions/pune.png",
  name:"Pune"
},
{

  img:"//in.bmscdn.com/m6/images/common-modules/regions/kolk.png",
  name:"Kolkata"
},
{

  img:"//in.bmscdn.com/m6/images/common-modules/regions/koch.png",
  name:"Kochi"
},
{

  img:"//in.bmscdn.com/m6/images/common-modules/regions/chd.png",
  name:"Chadigarh"
},

];
const locate = document.getElementById("locate");

const cityCont = document.getElementById("city_container");
popular_cities.forEach(city=>{

  const content = `<div class="city" >
  <img src=${city.img} id="img_city"/>
    <span id="city_name">${city.name}</span>
    
</div> `;
cityCont.innerHTML += content;
});
  

 
$(function() {
  
  $( "#location_box" ).dialog({
    
    modal: true,
    resizable: true,
     autoOpen: false, 
     title:"Select Your Location",
      width: 1000,
     show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "explode",
      duration: 1000
    },
    position: {
      my: 'center',
      at: 'center'
    },
    

    
  });
  //using jquery to show city dialog
  $( ".topbarLinks" ).click(function() {
     $( "#location_box" ).dialog( "open" );
  });
  $(".ui-dialog-titlebar").hide();
  $("#close_dialog").click(function(){
    $("#location_box").dialog("close");
  });
  $("#city_container").on("click", ".city",function(){
    selectCityName(popular_cities[$(this).index()].name);
    $("#location_box").dialog("close");
  });
});

  var username = localStorage.getItem("username");
  var user_id = document.getElementById("id_user");
  
    if(username != null || username != undefined){

 
      $("#id_user").show();
      document.getElementById("img_user").style.display = 'block';
      user_id.innerHTML = username;
      $("#btnId").hide();
    }else{
      $("#img_user").hide();
      $("#id_user").hide();
      $("#btnId").show();
      
    
    }
 

// menu hamburger

function menuOpen(){
  document.getElementById("menu").style.width = "250px";
}
function menuClose(){
  document.getElementById("menu").style.width = "0px";
}


//storing user location
var userLocation = localStorage.getItem("userCity");
if(userLocation === undefined || userLocation === null){
  locate.textContent = "location";
}else{
  locate.textContent = userLocation;
}
function selectCityName(name){
  localStorage.setItem("userCity",name);
  locate.textContent = name;
};
// carousel
const carousel_image = [
  {
  img:"https://in.bmscdn.com/promotions/cms/creatives/1640939086610_banner.1.jpg"
 },
 {
  img:"https://in.bmscdn.com/promotions/cms/creatives/1641275881665_rugbyworld.jpg"
 },
 {
  img:"https://in.bmscdn.com/promotions/cms/creatives/1641361864902_vir.jpg"
 }
];
const img_card = document.getElementById("card_carousel");
carousel_image.forEach(image=>{
const imgContent =`<div class="mySlides fade" >
        
       <img src=${image.img} style="width:100%" id="img_carousel">

             </div>`;
img_card.innerHTML += imgContent;
});
var slideIndex = 1;
var t;

showSlides(slideIndex);

function plusSlides(n) {
  slideIndex = slideIndex + n
  clearTimeout(t);
  showSlides(slideIndex);
}

function currentSlide(n) {
 
  showSlides( slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n === undefined) {
    n = ++slideIndex;
  }
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
     
      slides[i].style.display = "none";  
    
  }
  
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  t = setTimeout(showSlides, 5000);
  
 
}

// places
const places = [
    {
      img: "https://www.planetware.com/photos-large/USNY/usa-best-places-new-york.jpg",
      title: "Eastern Seaboard, New York",
      subtitle: "United States"
      
    },
    {
        img: "https://www.planetware.com/photos-large/USNY/usa-best-places-san-francisco.jpg",
        title: "Golden Gate Bridge",
        subtitle: "United States"
    },
    {
        img: "https://www.planetware.com/wpimages/2019/08/united-states-best-places-to-visit-grand-canyon-lookout.jpg",
        title: "The Grand Canyon",
        subtitle: "United States"
    },
    {
        img: "https://www.planetware.com/wpimages/2019/08/united-states-best-places-to-visit-houston-skyline.jpg",
        title: "Houston",
        subtitle: "United States"
    },
    {
        img: "https://www.planetware.com/photos-large/USNY/usa-best-places-new-york.jpg",
        title: "Eastern Seaboard, New York",
        subtitle: "United States"
    }
  ];

  // venues

  const venues = [
      {
    img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAzMCBOb3Ygb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00146021-xlwlsskaxn-portrait.jpg",
    name: "That Comedy Club",
    place: "Bandra,Mumbai, Maharashtra",
    nearby: "50km away"
  },
  {
    img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA4IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00305772-ahwbthtajh-portrait.jpg",
    name: "Camp In Pawna Lakeside",
    place: "Pawna, Pune, Maharashtra",
    nearby: "10km away"
  },
  {
    img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA4IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00319268-fshampqlfm-portrait.jpg",
    name: "Kalsubai Night Trek",
    place: "Bandra,Mumbai, Maharashtra",
    nearby: "30km away"
  },
  {
    img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA5IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00318898-vnphkcsqel-portrait.jpg",
    name: "Comedy House: Kharghar",
    place: "Mumbai, Maharashtra",
    nearby: "8km away"
  },
  {
    img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAzMCBOb3Ygb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00146021-xlwlsskaxn-portrait.jpg",
    name: "That Comedy Club",
    place: "Bandra,Mumbai, Maharashtra",
    nearby: "50km away"
  },
  {
    img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAzMCBOb3Ygb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00146021-xlwlsskaxn-portrait.jpg",
    name: "That Comedy Club",
    place: "Bandra,Mumbai, Maharashtra",
    nearby: "50km away"
  },
];

// latest release

const latestRelease = [
    {
        img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODklICAxMDBrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70/et00062705-vekksdzbfw-portrait.jpg",
        title: "83",
        subtitle: "Drama/Sports"
    },
    {
        img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODYlICAzOTJrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70/et00129538-scvrvbuuwt-portrait.jpg",
        title: "Pushpa: The Rise-Part 01",
        subtitle: "Action/Thriller"
    },
    {
        img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICAzOTVrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70/et00310790-zwearbqxyz-portrait.jpg",
        title: "Spider-Man: No Way Home",
        subtitle: "Action/Adventure/Sci-Fi"
    },
    {
        img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODclICA0NzYgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00320491-jywbrmmdps-portrait.jpg",
        title: "Sing 2",
        subtitle: "Animation/Comedy/Musical"
    },
    {
        img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjYlICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00133391-kpmmyymayq-portrait.jpg",
        title: "The Matrix Resurrections",
        subtitle: "Actions/Sci-Fi/Thriller"
    },
    {
      img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODglICAyayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00318064-zhffpudkae-portrait.jpg",
      title: "Encanto",
      subtitle: "UA/Animation"
  },
  {
      img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzUlICA1M2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00303116-dcnztahvjg-portrait.jpg",
      title: "Antim:The Final Truth",
      subtitle: "UA/Actions"
  },
];




  const placeCard = document.getElementById("card");
  
  places.forEach(result=>{
   const content = ` <div class="card_places" >
    <img src=${result.img} id="img_places"/>
    <h3 id="title_places">${result.title}</h3>
    <h4 id="subtitle_places">${result.subtitle}</h4>
    </div>`;

    placeCard.innerHTML += content;
 
  });

  const venueCard = document.getElementById("venue_card");
  venues.forEach(data=>{
     const content = `<div class="card_venue" >
     <img src=${data.img} id="img_venue"/>
         <h3 id="venue_name">${data.name}</h3>
         <h4 id="venue_place">${data.place}</h4>
         <h5 id="venue_nearby">${data.nearby}</h5>
 </div>`;
 venueCard.innerHTML += content;
  });

const latestReleaseCard = document.getElementById("movie_card");
latestRelease.forEach(data=>{
const content = `<div class="card_venue">
<img src=${data.img} id="img_venue"/>
    <h3 id="show_title">${data.title}</h3>
    <h4 id="show_subtitle">${data.subtitle}</h4>
    
</div>`;
latestReleaseCard.innerHTML += content;
});
$("#movie_card").on("click",".card_venue",function(){

  localStorage.setItem("itemPos",$(this).index());
  window.location.href = "/Details/showDetail.html";
});



   

// Sigin/Signup

var userName = localStorage.getItem("userName");
var userEmail = localStorage.getItem("userEmail");
var userPassword = localStorage.getItem("userPassword");

function checkUserLoginStatus(){
if(userName === undefined || userEmail === undefined || userPassword === undefined){
   document.getElementById("btnId").innerHTML = "Signin"

}else{
  document.getElementById("btnId").innerHTML = "Signout";

}
};


