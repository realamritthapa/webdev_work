// Add your code here
const img = document.createElement("img");
img.src = "../images/amrit.png";
document.body.append(img);
img.setAttribute("class", "img");

const paragraph = document.createElement("p");
paragraph.innerText =
  " My name is Amrit Thapa. I am a post-bacc student at Portland State University studying computer science. I graduated from Portland state in 2021 with a degree in biology with the goal to go into physical therapy. But after I graduated I changed my mind and enrolled in the cs program in 2022.";

document.body.append(paragraph);
paragraph.setAttribute("class", "bio");
