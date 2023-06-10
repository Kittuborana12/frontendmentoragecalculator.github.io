function calculateage() {
  var birthYear = parseInt(document.getElementById("year").value);
  var birthMonth = parseInt(document.getElementById("month").value);
  var birthDay = parseInt(document.getElementById("date").value);
 let span1=document.getElementById("span1");
 let span2=document.getElementById("span2");
 let span3=document.getElementById("span3");
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var currentMonth = currentDate.getMonth() + 1; // Months are zero-based
  var currentDay = currentDate.getDate();
   const months=[31,28,31,30,31,30,31,31,30,31,30,31]; 

  if(currentDay<birthDay){
    currentDay=currentDay+months[currentMonth-1];
    currentMonth=currentMonth-1;
  }
  if(currentMonth<birthMonth){
    currentYear=currentYear-1;
    currentMonth=currentMonth+12;
  }
  var yearDiff = currentYear - birthYear;
  var monthDiff = currentMonth - birthMonth;
  var dayDiff = currentDay - birthDay;
    
   span1.textContent= yearDiff;
   span2.textContent=monthDiff;
   span3.textContent=dayDiff;
 
  
}