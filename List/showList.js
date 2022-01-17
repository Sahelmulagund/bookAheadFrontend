
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

const carousel_image = [
    {
    img:"https://in.bmscdn.com/promotions/cms/creatives/1641448451689_web01.png"
   },
   {
    img:"https://in.bmscdn.com/promotions/cms/creatives/1640245262186_cinepolis.jpg"
   },
   {
    img:"https://in.bmscdn.com/promotions/cms/creatives/1641480603635_83.jpg"
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
    {
        img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODElICAyayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00318232-fjtdfrarlh-portrait.jpg",
        title:"House Of Gucci",
        subtitle:"U/English/Action"
    },
    {
        img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODIlICA0Nmsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00110039-njndrsdzww-portrait.jpg",
        title:"No Time To Die",
        subtitle:"U/English/Action"
    }

];

 const explore= document.getElementsByClassName("headerSide");
 $(".headerSide").click(function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#grid").offset().top
    }, 2000);
 });

  const gridList = document.getElementById("grid");
  latestRelease.forEach(movie=>{
     const content = `<div class="card_movie">
     <img src=${movie.img} id="img_movie"/>
         <h3 id="show_title">${movie.title}</h3>
         <h4 id="show_subtitle">${movie.subtitle}</h4>
         
     </div>`;
     gridList.innerHTML += content;
  });

  $(".grid-container").on("click",".card_movie",function(){
      localStorage.setItem("itemPos",$(this).index());
    window.location.href='/Details/showDetail.html';
  });