const head0 = document.createElement("h1");
head0.innerHTML = "Freelancer Forum";
head0.style.textAlign = "center";
document.body.appendChild(head0);

const average = document.createElement("p");
average.innerHTML = "The average starting price is $30.";
average.style.textAlign = "center";
average.style.fontSize = "32px";
document.body.appendChild(average);

const afree = document.createElement("h2");
afree.innerHTML = "Available Free Lancers";
afree.style.textAlign = "center";
afree.style.fontSize = "44px";
document.body.appendChild(afree);

const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

/* 

THIS IS WHERE I WILL STORE MY FOR EACH FUNCTION


*/

const box = document.createElement("div");
box.style.display = "flex";
box.style.justifyContent = "space-evenly";

const names = document.createElement("h2");
names.innerHTML = "Name";

const occupations = document.createElement("h2");
occupations.innerHTML = "Occupation";

const startingPrices = document.createElement("h2");
startingPrices.innerHTML = "Starting Price";

box.appendChild(names);
box.appendChild(occupations);
box.appendChild(startingPrices);

document.body.appendChild(box);
