// Your code goes here
const STORAGE_KEY = "habitTrackerData";
let state = [];

function loadHabits() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const habits = JSON.parse(saved);

    if (Array.isArray(habits)) {
      return habits;
    }
    return [];
  } catch (error) {
    return [];
  }
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function todayString() {
  return formatDate(new Date());
}

function shiftDate(dateString, days) {
  const date = new Date(dateString + "T12:00:00");
  date.setDate(date.getDate() + days);
  return formatDate(date);
}

function init() {
  state = loadHabits();
  const input = document.querySelector("#habit-input");

  if (input) {
    console.log("Ready");
  } else {
    console.log("Input not found");
  }
  console.log(todayString());
}

init();
