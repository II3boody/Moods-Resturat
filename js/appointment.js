const hourHand   = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');

  function updateClock(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours   = now.getHours() % 12;

    const secDeg  = seconds * 6;
    const minDeg  = minutes * 6 + seconds * 0.1;      
    const hourDeg = hours * 30 + minutes * 0.5;

    hourHand.style.transform   = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minDeg}deg)`;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${secDeg}deg)`;
  }

  updateClock();           
  setInterval(updateClock, 1000);
