const shows = [
    {
        bgImg:"https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/83-et00062705-25-12-2021-02-47-08.jpg",
        img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODklICAxMDBrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70/et00062705-vekksdzbfw-portrait.jpg",
        title: "83",
        subtitle: "Drama/Sports",
        likes:"89%"

    },
    {
        bgImg:"https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/pushpa--the-rise-et00129538-08-12-2021-01-21-46.jpg",
        img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODYlICAzOTJrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70/et00129538-scvrvbuuwt-portrait.jpg",
        title: "Pushpa: The Rise-Part 01",
        subtitle: "Action/Thriller",
        likes:"86%"
    },
    {
        bgImg:"https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg",
        img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICAzOTVrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70/et00310790-zwearbqxyz-portrait.jpg",
        title: "Spider-Man: No Way Home",
        subtitle: "Action/Adventure/Sci-Fi",
        likes:"92%"
    },
    {
        bgImg:"https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/sing-2-et00320491-27-12-2021-12-23-11.jpg",
        img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODclICA0NzYgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00320491-jywbrmmdps-portrait.jpg",
        title: "Sing 2",
        subtitle: "Animation/Comedy/Musical",
        likes:"85%"
    },
    {
        bgImg:"https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-matrix-resurrections-et00133391-24-11-2021-12-59-51.jpg",
        img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjYlICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00133391-kpmmyymayq-portrait.jpg",
        title: "The Matrix Resurrections",
        subtitle: "Actions/Sci-Fi/Thriller",
        likes:"96%"
    },
    {
        bgImg:"https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/encanto-et00318064-18-11-2021-05-17-00.jpg",
        img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODglICAyayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00318064-zhffpudkae-portrait.jpg",
        title: "Encanto",
        subtitle: "UA/Animation",
        likes:"64%"
    },
    {
        bgImg:"https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/antim-the-final-truth-et00303116-22-11-2021-05-17-20.jpg",
        img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzUlICA1M2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00303116-dcnztahvjg-portrait.jpg",
        title: "Antim:The Final Truth",
        subtitle: "UA/Actions",
        likes:"79%"
    },
    {
        bgImg:"https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/house-of-gucci-et00318232-25-11-2021-10-22-20.jpg",
        img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODElICAyayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00318232-fjtdfrarlh-portrait.jpg",
        title:"House Of Gucci",
        subtitle:"U/English/Action",
        likes:"85%"
    },
    {
        bgImg:"https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/no-time-to-die-et00110039-29-09-2021-01-44-39.jpg",
        img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODIlICA0Nmsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00110039-njndrsdzww-portrait.jpg",
        title:"No Time To Die",
        subtitle:"U/English/Action",
        likes:"90%"
    }

];

var itemPosition = localStorage.getItem("itemPos");
const mainContainer = document.getElementById("mainContainer");
const movieImg = document.getElementById("img_detail");
const movieName = document.getElementById("detailTitle");
const movieGenre = document.getElementById("detailSubtitle");
const ratingPercent = document.getElementById("ratingTxt");

mainContainer.style.backgroundImage = `linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%), url(${shows[itemPosition].bgImg})`;
movieImg.src = shows[itemPosition].img;
movieName.textContent = shows[itemPosition].title;
movieGenre.textContent = shows[itemPosition].subtitle;
ratingPercent.innerHTML = `<img src="https://img.icons8.com/color/48/000000/like--v3.png" id="imgRating"/>${shows[itemPosition].likes}`;

$(function(){
    $( ".ticket-dialog-container" ).dialog({
    
        modal: true,
        resizable: true,
         autoOpen: false, 
         title:"Fill in the details and proceed to checkout!",
          width: 1000,
         show: {
          effect: "blind",
          duration: 1000
        },
        hide: {
          effect:"blind",
          duration: 1000
        },
        position: {
          my: 'center',
          at: 'center'
        },
        
    });
});
$(".btnPreBook").click(function(){
    if(localStorage.getItem("username") != null || localStorage.getItem("username") != undefined){
    $(".ticket-dialog-container").dialog("open");
}else{
    window.location.href = "/Login/login.html";
    alert("Please login to continue");
    return
}
});
 
document.getElementsByClassName("movie-name")[0].innerHTML = shows[itemPosition].title;
var dtToday = new Date();
    
var month = dtToday.getMonth() + 1;
var day = dtToday.getDate();
var year = dtToday.getFullYear();

var hours = dtToday.getHours();
var minutes = dtToday.getMinutes();
if(month < 10)
    month = '0' + month.toString();
if(day < 10)
    day = '0' + day.toString();
if(hours < 10)
    hours = '0'+hours.toString();
if(minutes < 10)
    minutes = '0'+ minutes.toString();

var maxDate = year + '-' + month + '-' + day + 'T'+ hours + ':' + minutes;
 
$(".date-picker").attr("min", maxDate);
var i=0;
for(i=0; i<48;i++){

   const seats = `<div class="seat"></div>`;
   document.getElementById("row1").innerHTML += seats;
}
var i=0;
for(i=0; i<48;i++){

   const seats = `<div class="seat2"></div>`;
   document.getElementById("row2").innerHTML += seats;
}

var seatCounter = 0;
var seatPrice = 250;




$(".row1").on("click",".seat",function(){
     
  if( document.getElementsByClassName("seat")[$(this).index()].className === "seat"){
    document.getElementsByClassName("seat")[$(this).index()].className = "seat active";
    seatCounter++;
    document.getElementsByClassName("seatCount")[0].textContent = `Booked Seats: ${seatCounter}`;
    document.getElementsByClassName("totalAmt")[0].textContent = `Total: ₹${seatPrice*seatCounter}`;
  }else{
    document.getElementsByClassName("seat")[$(this).index()].className = "seat";
    seatCounter--;
    document.getElementsByClassName("seatCount")[0].textContent = `Booked Seats: ${seatCounter}`;
    document.getElementsByClassName("totalAmt")[0].textContent = `Total: ₹${seatPrice*seatCounter}`;
  }
});
$(".row2").on("click",".seat2",function(){
     
    if( document.getElementsByClassName("seat2")[$(this).index()].className === "seat2"){
      document.getElementsByClassName("seat2")[$(this).index()].className = "seat2 active";
      seatCounter++;
      document.getElementsByClassName("seatCount")[0].textContent = `Booked Seats: ${seatCounter}`;
      document.getElementsByClassName("totalAmt")[0].textContent = `Total: ₹${seatPrice*seatCounter}`;
    }else{
      document.getElementsByClassName("seat2")[$(this).index()].className = "seat2";
      seatCounter--;
      document.getElementsByClassName("seatCount")[0].textContent = `Booked Seats: ${seatCounter}`;
      document.getElementsByClassName("totalAmt")[0].textContent = `Total: ₹${seatPrice*seatCounter}`;
    }
  });

  $(".btnCheckout").click(function(){
      if(document.getElementsByClassName("date-picker")[0].value.toString().length === 0){
          window.alert("Select date and time");
          return;
      }else if(seatCounter <= 0){
          localStorage.setItem("billTotal",  document.getElementsByClassName("totalAmt")[0].textContent.toString());
        window.alert("Select atleast one seat");
        return;
      }
     window.location.href = "/Home/index.html";
  });
document.getElementsByClassName("user-name")[0].textContent = localStorage.getItem("username");
document.getElementsByClassName("seatCount")[0].textContent = `Booked Seats: ${seatCounter}`;