function updateClock() {
   var currentTime = new Date();
   var hour = currentTime.getHours();
   var minute = currentTime.getMinutes();
   var second = currentTime.getSeconds();
   if (minute < 10) {
       minute = '0' + minute;
   }
   if (second < 10) {
       second = '0' + second;
   }
   var timeDisplay = hour + ':' + minute + ':' + second;
   document.getElementById('clock').textContent = timeDisplay;
}
setInterval(updateClock, 1000);
updateClock();  


