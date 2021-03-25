// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Mar 31, 2021'),
// });

const daysValue = document.querySelector('[data-value=days]');
const hoursValue = document.querySelector('[data-value=hours]');
const minsValue = document.querySelector('[data-value=mins]');
const secsValue = document.querySelector('[data-value=secs]');

const timer = {
  start() {
    setInterval(() => {
      const currentTime = Date.now('Mar 27, 2021');
      const targetDate = new Date('Mar 31, 2021');
      const deltaTime = targetDate - currentTime;
      const { days, hours, mins, secs } = getTimeComponents(deltaTime);
      daysValue.textContent = days;
      hoursValue.textContent = hours;
      minsValue.textContent = mins;
      secsValue.textContent = secs;
      
    }, 1000);
  },
};

timer.start();

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}


// class CountdownTimer {
//   constructor() {

//   }
//   start() {
//     setInterval(() => {
//       const currentTime = Date.now('Mar 27, 2021');
//       const targetDate = new Date('Mar 31, 2021');
//       const deltaTime = targetDate - currentTime;
//       const { days, hours, mins, secs } = getTimeComponents(deltaTime);
//       daysValue.textContent = days;
//       hoursValue.textContent = hours;
//       minsValue.textContent = mins;
//       secsValue.textContent = secs;
      
//     }, 1000);
//   }
// };

// const countdownTimer = new CountdownTimer();



// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты.
// Такой плагин может использоваться в блогах и интернет - магазинах, страницах регистрации событий,
//     во время технического обслуживания и т.д.

// Плагин показывает четыре цифры: дни, часы, минуты и секунды в формате XX: XX: XX: XX.
// Количество дней может состоять из более чем двух цифр.

// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

// Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.

// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);