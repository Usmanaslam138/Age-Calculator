let input_date = document.getElementById("user_input");
input_date.max = new Date().toISOString().split("T")[0];
let current_date = new Date();
let result = document.getElementById("result");
let age_display = document.getElementById("age_display");
function birthdate() {
  let birth_date = new Date(user_input.value);
  // Birthday year, month and date

  let y1 = birth_date.getFullYear();
  let m1 = birth_date.getMonth() + 1;
  let d1 = birth_date.getDate();

  // Current date year, month and day

  let y2 = current_date.getFullYear();
  let m2 = current_date.getMonth() + 1;
  let d2 = current_date.getDate();

  // Current Age
  let y3, m3, d3;

  // Year
  y3 = y2 - y1;

  // Month
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else if (m2 < m1) {
    y3--;
    m3 = m2 + 12 - m1;
  }

  // Day
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }

  console.log(getDaysInMonth(y1, m1));
  age_display.classList.add("age_display");
  result.classList.add("result");
  result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old`;
}
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
