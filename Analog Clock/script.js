setInterval(() => {
  CurrentDate = new Date();
  hours = CurrentDate.getHours();
  minutes = CurrentDate.getMinutes();
  seconds = CurrentDate.getSeconds();
  
  hours_rotation =( 30*hours + (minutes/2));
  minutes_rotation = 6*minutes
  seconds_rotation = 6*seconds
  
  document.querySelector(".hours").style.transform = `rotate(${hours_rotation}deg)`
  document.querySelector(".minutes").style.transform = `rotate(${minutes_rotation}deg)`
  document.querySelector(".seconds").style.transform = `rotate(${seconds_rotation}deg)`
}, 1000);
  