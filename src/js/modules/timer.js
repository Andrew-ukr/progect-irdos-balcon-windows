const timer = (deadline) => {
  let leftTime;
  let leftDays;
  let leftHours;
  let leftMinutes;
  let leftSeconds;

  function getLeftTime() {
    leftTime = Date.parse(deadline) - (Date.parse(new Date()) + 7200000);
    if (leftTime <= 0) {
      leftDays = "0";
      leftHours = "0";
      leftMinutes = "0";
      leftSeconds = "0";
    } else {
      leftDays = Math.floor(leftTime / (1000 * 60 * 60 * 24));
      leftHours = Math.floor((leftTime / (1000 * 60 * 60)) % 24);
      leftMinutes = Math.floor((leftTime / (1000 * 60)) % 60);
      leftSeconds = Math.floor((leftTime / (1000)) % 60);
    }
  }

  function time(a, ident, leftId) {
    a = document.querySelector(ident);
    if (leftId < 10) {
      a.textContent = `0${leftId}`;
    } else {
      a.textContent = `${leftId}`;
    }
  }

  function startTimer() {
    getLeftTime();
    time('days', '#days', leftDays);
    time('hours', '#hours', leftHours);
    time('minutes', '#minutes', leftMinutes);
    time('seconds', '#seconds', leftSeconds);

    let interval = setInterval(() => {
      getLeftTime();
      time('days', '#days', leftDays);
      time('hours', '#hours', leftHours);
      time('minutes', '#minutes', leftMinutes);
      time('seconds', '#seconds', leftSeconds);
    }, 1000);

    if (leftTime <= 0) {
      clearInterval(interval);
    }
  }
  
  startTimer();
};

export default timer;