const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');

const currentYear = new Date().getFullYear();

const goalTime = new Date(`November 18 ${currentYear} 15:00:00`);

function updateCountdown() {
  const currentTime = new Date();
  const diff = goalTime - currentTime

  const d = Math.floor(diff/1000/60/60/24);
  const h = Math.floor(diff/1000/60/60) % 24;
  const m = Math.floor(diff/1000/60) % 60;
  const s = Math.floor(diff/1000) % 60;
  console.log(d,h,m,s);

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
};

// Refresh
setInterval(updateCountdown, 1000);

