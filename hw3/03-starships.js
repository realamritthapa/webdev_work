const fetchData = async (url) => {
  // REtrieve the data from the API
  const response = await fetch(url);
  const { results } = await response.json();

  return results;
};
let starships;
let result = fetchData("https://swapi.dev/api/starships/")
  .then((data) => {
    starships = data;
    console.log(starships);
  })
  .catch((error) => {
    console.error(error);
  });

const createSpaceshipComponent = (spaceship) => {
  const container = document.createElement("section"); // do not modify this line
  const name_credit = document.createElement("div");
  name_credit.setAttribute("class", "name_credit");

  const name_item = document.createElement("div");
  name_item.setAttribute("class", "name");
  name_item.innerText = spaceship.name;

  const credit_item = document.createElement("div");
  credit_item.setAttribute("class", "credit");
  credit_item.innerText = spaceship.cost_in_credits;

  const manufacture = document.createElement("div");
  manufacture.setAttribute("class", "manufacture");
  manufacture.innerText = `Manufactured by ${spaceship.manufacturer}`;

  const speed_label = document.createElement("div");
  speed_label.setAttribute("class", "speed_label");

  const speed = document.createElement("div");
  speed.setAttribute("class", "speed");
  speed.innerText = spaceship.max_atmosphering_speed;

  const speed_name = document.createElement("div");
  speed_name.setAttribute("class", "speed_name");
  speed_name.innerText = "Max atmosphering speed";
  name_credit.appendChild(name_item);
  name_credit.appendChild(credit_item);

  container.appendChild(name_credit);
  container.appendChild(manufacture);

  return container; // do not modify this line
};

const main = document.getElementsByTagName("main")[0];

const filterStarships = (input) => {
  // Return an array with all ships that have less than 10 passengers with more than one crew member
  const filterd = input.filter((ships) => {
    return (
      (Number(ships.passengers) < 10 && Number(ships.crew) > 1) ||
      ships.passengers == "n/a"
    );
    console.log(Number(ships.passengers));
  });
  console.log(filterd);
  return filterd;
};

const reduceStarships = (input) => {
  // Return a String of the cost to purchase all ships in the input array
  const totalCost = input.reduce((accumulator, currentValue) => {
    const numCredit = Number(currentValue.cost_in_credits);
    if (numCredit) {
      return accumulator + numCredit;
    }
    return accumulator;
  }, 0);
  return `The cost of all starships is ${totalCost.toLocaleString()} credits`;
};

// do not modify the code below
let displayAllButton = document.getElementById("all");
displayAllButton.addEventListener("click", () => {
  displayShipComponents(starships);
});

let filterButton = document.getElementById("filter");
filterButton.addEventListener("click", () => {
  const filteredShips = filterStarships(starships);
  displayShipComponents(filteredShips);
});

let reduceButton = document.getElementById("reduce");
reduceButton.addEventListener("click", () => {
  const totalCost = reduceStarships(starships);
  displayText(totalCost);
});

const clearAndReset = () => {
  let app = document.getElementById("results");
  app.remove();
  app = document.createElement("div");
  app.id = "results";
  app.style.display = "flex";
  app.style.flexWrap = "wrap";
  app.style.justifyContent = "center";
  main.append(app);
};

const displayShipComponents = (starships) => {
  clearAndReset();
  let app = document.getElementById("results");
  for (const ship in starships) {
    const shipComponent = createSpaceshipComponent(starships[ship]);
    app.appendChild(shipComponent);
  }
};

const displayText = (text) => {
  clearAndReset();
  let app = document.getElementById("results");
  let paragraph = document.createElement("p");
  paragraph.textContent = text;
  paragraph.style.backgroundColor = "white";
  paragraph.style.borderRadius = "10px";
  paragraph.style.padding = "30px";
  app.appendChild(paragraph);
};
