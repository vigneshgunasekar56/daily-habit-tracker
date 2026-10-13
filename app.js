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

function createHabitItem(habit) {
    const li = document.createElement("li");
    li.className = "habit";

    const div = document.createElement("div");
    div.className = "habit-main";

    const text = document.createElement("span");
    text.className = "habit-text";

    const name = document.createElement("span");
    name.className = "habit-name";
    name.textContent = habit.name;

    const streak = document.createElement("span");
    streak.className = "habit-streak";
    streak.textContent = "0 day streak";

    text.appendChild(name);
    text.appendChild(streak);
    div.appendChild(text);
    li.appendChild(div);

    return li;
}

function render() {
    const list = document.querySelector("#habit-list");
    const emptyMessage = document.querySelector("#empty-message");

    list.innerHTML = "";

    state.forEach(function(habit) {
        list.appendChild(createHabitItem(habit));
    });

    emptyMessage.hidden = state.length > 0 ? true : false;
}

function addHabit(name) {
  let newHabit = {
    id: Date.now(),
    name: name,
    doneDates: [],
  };

  state.push(newHabit);
  render();
}

function setupForm(input) {
  const form = document.querySelector("#add-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const trimmed = input.value.trim();

    if (trimmed === "") {
      console.log("Type a habit first");
    } else {
      console.log(trimmed);
      addHabit(trimmed);
      input.value = "";
    }
  });
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

  setupForm(input);
  render();
}

init();
