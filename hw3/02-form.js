// Add your code here
let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let names = form.elements.namedItem("name").value;
  let username = form.elements.namedItem("username").value;
  let email = form.elements.namedItem("email").value;
  let date = form.elements.namedItem("date").value;
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
    console.log("sorry Form is incomplete");
  } else {
    console.group("========= Form Submission =========");

    console.log(`Name: ${names}`);
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Data of birth: ${date}`);
    console.log(`Preferred Pronouns: ${pronoun_value}`);
  }
});
