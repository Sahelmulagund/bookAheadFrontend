var dtToday = new Date();
    
var month = dtToday.getMonth() + 1;
var day = dtToday.getDate();
var year = dtToday.getFullYear();
if(day < 10)
     day = '0'+day;
if(month<10)
    month = '0'+month;     

document.getElementById("day").textContent = day;
document.getElementById("month").textContent = month;
document.getElementById("year").textContent = year;