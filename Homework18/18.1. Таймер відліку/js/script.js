let allTheTime = 87;

function formatTime(seconds) {
   let minutes = Math.floor(seconds / 60);
   let second = seconds % 60;
   return `${minutes.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
}

function startTimer() {
   const timerEl = document.getElementById('timer');
   timerEl.textContent = formatTime(allTheTime);

   if (allTheTime < 0) {
      clearInterval(timerInterval);
      timerEl.innerHTML = `The time is over!`
   } else {
      allTheTime--;
   }
}

const timerInterval = setInterval(startTimer, 1000);

startTimer();

const promise1 = new Promise((resolve, reject) => {
   setTimeout(() => {
      console.log('in Promise')
   }, 1000)
})

promise1().then(() => {
   console.log('Yes')
}).catch(() => {
   console.log('error')
})