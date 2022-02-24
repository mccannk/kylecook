const countdown = () => {
const today = new Date()
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(0,0,0,0);
const gap = tomorrow - today;
const second = 1000;
const minute = second * 60
const hour = minute * 60;
const day = hour * 24
const textHour = Math.floor((gap % day) / hour);
const textMinute = Math.floor((gap % hour) / minute);
const textSecond = Math.floor((gap % minute) / second);

// document.querySelector('.day').innerText = textDay;
document.querySelector('.demo').innerHTML = 'Hours: ' + textHour + ' , Minutes: ' + textMinute + ' , Seconds: ' + textSecond;
// document.querySelector('.minute').innerText = textMinute < 10 ? '0' + textMinute : textMinute;
// document.querySelector('.second').innerText = textSecond < 10 ? '0' + textSecond : textSecond;
}

setInterval(countdown, 1000)

countdown();
