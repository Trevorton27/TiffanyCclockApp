function displayClock() {
  const clock = new Date();
  let hours = clock.getHours();
  const minutes = addLeadingZero(clock.getMinutes());
  const seconds = addLeadingZero(clock.getSeconds());
  /*The if statement will teach Javascript to turn the clock to "pm"*/
  const isAm = hours < 12 || hours === 0;
  const amPmDisplay = isAm ? 'AM' : 'PM';
  hours = hours >= 13 ? hours - 12 : hours;
  hours = hours === 0 ? hours + 12 : hours;

  const currentTime = `${hours}:${minutes}:${seconds} ${amPmDisplay}`;

  document.getElementById('clock').textContent = currentTime;
}

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

let month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

let day = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

function displayDate() {
  const date = new Date();
  let dayDisplay = day[date.getDay()];
  let dateDisplay = convertToOrdinal(date.getDate());
  let monthDisplay = month[date.getMonth()];
  let yearDisplay = date.getFullYear();

  let calendar = `${dayDisplay}, ${monthDisplay} ${dateDisplay} ${yearDisplay}`;

  document.getElementById('date').textContent = calendar;
}

function convertToOrdinal(number) {
  if (number < 10 || number > 20) {
    switch (number % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
}

displayClock();
displayDate();
setInterval(displayClock, 1000);
