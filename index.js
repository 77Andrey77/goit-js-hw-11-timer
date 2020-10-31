const daysEl = document.querySelector('span[data-value="days"]');
const hoursEl = document.querySelector('span[data-value="hours"]');
const minsEl = document.querySelector('span[data-value="mins"]');
const secsEl = document.querySelector('span[data-value="secs"]')

class CountdownTimer{
  constructor({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;
  }


  start() {

   this.timeId = setInterval(() => {
      const currentTime = Date.now();
      const time = this.targetDate - currentTime;
      // console.log('start -> currentTime', currentTime);
      // console.log('start -> startTime', startTime);
      
      // console.log(currentTime - startTime);
      this.getTimeComponents(time);
    }, 1000)
  };

//   remainingTime({ days, hours, mins, secs }) {
//     daysEl.textContent = `${days}`;
//   hoursEl.textContent = `${hours}`;
//   minsEl.textContent = `${mins}`;
//   secsEl.textContent = `${secs}`;
//  }
  
  pad(value) {
    return String(value).padStart(2, '0');
  }

   getTimeComponents(time) {
    /*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
     daysEl.textContent = days;
/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
     hoursEl.textContent = hours;
/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
     minsEl.textContent = mins;
/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
     secsEl.textContent = secs;
    //  return { days, hours, mins, secs };
  }
  
};


const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 3, 2020'),
});

document.addEventListener("DOMContentLoaded", timer1.start());

