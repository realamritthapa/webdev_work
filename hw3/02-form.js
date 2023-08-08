// Add your code here
let form = document.querySelector("form");
const months = [
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
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let names = form.elements.namedItem("name").value;
  let username = form.elements.namedItem("username").value;
  let email = form.elements.namedItem("email").value;
  let date = form.elements.namedItem("date").value;
  let [year, month, day] = date.split("-");
  month = parseInt(month, 10) - 1;
  let new_date = `${months[month]} ${parseInt(day, 10)}, ${year}`;
  let pronoun = form.elements.namedItem("pronoun");
  let pronoun_value = "";
  let elem = document.querySelectorAll("label.forth");

  for (let i = 0; i < pronoun.length; ++i) {
    if (pronoun[i].checked) {
      pronoun_value = document.querySelector(
        `label[for="${pronoun[i].id}"]`
      ).textContent;
    }
  }
  if (names === "" || email === "") {
    alert("sorry Form is incomplete");
  } else {
    console.group("========= Form Submission =========");
    console.log(`Name: ${names}`);
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Data of birth: ${new_date}`);
    console.log(`Preferred Pronouns: ${pronoun_value}`);
  }
});
