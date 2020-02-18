class CountdownTimer {
    constructor(selector, targetDate) {
      this.selector = selector;
      this.targetDate = targetDate;
    }
  
    start() {
      this.init();
      const timerId = setInterval(() => {
        const currentDate = Date.now();
        const time = this.targetDate - currentDate;
        if (time < 0) {
          clearInterval(timerId);
          return console.log(``);
        }
        this.updateTimer(time);
      }, 1000);
    }
  
    init() {
      this.timer = document.querySelector(this.selector);
      this.days = this.timer.querySelector(`.value[data-value=days]`);
      this.hours = this.timer.querySelector(`.value[data-value=hours]`);
      this.mins = this.timer.querySelector(`.value[data-value=mins]`);
      this.secs = this.timer.querySelector(`.value[data-value=secs]`);
    }
  
    updateTimer(time) {
      const daysValue = this.calculateForDays(time);
      const hoursValue = this.calculateForHours(time);
      const minsValue = this.calculateForMins(time);
      const secsValue = this.calculateForSecs(time);
  
      this.updateTextContent(this.days, daysValue);
      this.updateTextContent(this.hours, hoursValue);
      this.updateTextContent(this.mins, minsValue);
      this.updateTextContent(this.secs, secsValue);
    }
  
    updateTextContent(elem, value) {
      elem.textContent = `${value}`;
    }
  
    calculateForDays(time) {
      return this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    }
  
    calculateForHours(time) {
      return this.pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
    }
  
    calculateForMins(time) {
      return this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    }
  
    calculateForSecs(time) {
      return this.pad(Math.floor((time % (1000 * 60)) / 1000));
    }
  
    pad(value) {
      return String(value).padStart(2, 0);
    }
  }
  
  const toDate = new Date(`Jul 17, 2020`).getTime();
  const newTimer = new CountdownTimer(`#timer-1`, new Date(toDate));
  
  newTimer.start();