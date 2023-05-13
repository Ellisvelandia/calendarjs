const currentDate = document.getElementById("current-date");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const days = document.querySelector(".days");

let date = new Date();
currentYear = date.getFullYear();
currentMonth = date.getMonth();

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const isToday = (day) => {
  let isToday =
    day === date.getDate() &&
    currentMonth === date.getMonth() &&
    currentYear === date.getFullYear()
      ? "active"
      : "";
  return isToday;
};

const generateCalendar = () => {
  let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  let lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
  let lastDayOfMonth = new Date(
    currentYear,
    currentMonth,
    lastDateOfMonth
  ).getDay();
  let liTag = "";

  for (let index = firstDayOfMonth; index > 0; index--) {
    liTag += `<li class="inactive">${lastDateOfLastMonth - index + 1}</li>`;
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    let myDate = new Date();
    myDate.setFullYear(currentYear);
    myDate.setMonth(currentMonth);
    myDate.setDate(i);

    if (myDate.getDay() === 0) {
      liTag += `<li class="${
        isToday(i) === "active" ? "bg-red" : "red"
      }">${i}</li>`;
    } else {
      liTag += `<li class="${
        isToday(i) === "active" ? "bg-blue" : "blue"
      }">${i}</li>`;
    }
  }

  for (let index = lastDayOfMonth; index < 6; index++) {
    liTag += `<li class="inactive">${index - lastDayOfMonth + 1}</li>`;
  }
  days.innerHTML = liTag;

  currentDate.innerHTML = `${months[currentMonth]} ${currentYear}`;
};

const updateYear = () => {
  if (currentMonth < 0 || currentMonth > 11) {
    date = new Date(currentYear, currentMonth);
    currentYear = date.getFullYear();
    currentMonth = date.getMonth();
  } else {
    date = new Date();
  }
};

prev.addEventListener("click", () => {
  currentMonth = currentMonth - 1;
  updateYear();
  generateCalendar();
});

next.addEventListener("click", () => {
  currentMonth = currentMonth + 1;
  updateYear();
  generateCalendar();
});

generateCalendar();
