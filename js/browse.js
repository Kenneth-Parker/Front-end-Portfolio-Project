// Fetch data from the API
fetch("https://randomuser.me/api")
  .then((response) => response.json())
  .then((data) => displayCard(data.results))
  .catch(displayError);

// Display error
function displayError(error) {
  const section = document.querySelector("section.error-space");
  section.style.display = "block";

  const paragraph = document.createElement("p");
  paragraph.textContent = "Something went wrong!";

  const errorMessage = document.createElement("p");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = error;

  section.append(paragraph, errorMessage);
}

// Create a display card:
function displayCard(results) {
  const person = results[0];
  const { title, first, last } = person.name;
  const fullName = `${title} ${first} ${last}`;

  const section = document.createElement("section");
  section.classList.add("card");

  const img = document.createElement("img");
  img.src = person.picture.large;
  img.alt = fullName;
  img.classList = img;

  const h3 = document.createElement("h3");
  h3.textContent = fullName;

  const paragraph = document.createElement("p");
  paragraph.textContent = 'Location: ' + person.location.city +', '+ person.location.state;


  section.append(h3, img, paragraph);
  document.querySelector("#resource-field-1").appendChild(section);

}

// ******************************************* \\

// Fetch data from the API
fetch("https://randomuser.me/api")
  .then((response) => response.json())
  .then((data) => displayCard2(data.results))
  .catch(displayError);

// Display error
function displayError(error) {
  const section = document.querySelector("section.error-space");
  section.style.display = "block";

  const paragraph = document.createElement("p");
  paragraph.textContent = "Something went wrong!";

  const errorMessage = document.createElement("p");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = error;

  section.append(paragraph, errorMessage);
}

// Create a display card:
function displayCard2(results) {
  const person = results[0];
  const { title, first, last } = person.name;
  const fullName = `${title} ${first} ${last}`;

  const section = document.createElement("section");
  section.classList.add("card");

  const img = document.createElement("img");
  img.src = person.picture.large;
  img.alt = fullName;
  img.classList = img;

  const h3 = document.createElement("h3");
  h3.textContent = fullName;

  const paragraph = document.createElement("p");
  paragraph.textContent = 'Location: ' + person.location.city +', '+ person.location.state;


  section.append(h3, img, paragraph);
  document.querySelector("#resource-field-2").appendChild(section);

}

// ******************************************* \\

// Fetch data from the API
fetch("https://randomuser.me/api")
  .then((response) => response.json())
  .then((data) => displayCard3(data.results))
  .catch(displayError);

// Display error
function displayError(error) {
  const section = document.querySelector("section.error-space");
  section.style.display = "block";

  const paragraph = document.createElement("p");
  paragraph.textContent = "Something went wrong!";

  const errorMessage = document.createElement("p");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = error;

  section.append(paragraph, errorMessage);
}

// Create a display card:
function displayCard3(results) {
  const person = results[0];
  const { title, first, last } = person.name;
  const fullName = `${title} ${first} ${last}`;

  const section = document.createElement("section");
  section.classList.add("card");

  const img = document.createElement("img");
  img.src = person.picture.large;
  img.alt = fullName;
  img.classList = img;

  const h3 = document.createElement("h3");
  h3.textContent = fullName;

  const paragraph = document.createElement("p");
  paragraph.textContent = 'Location: ' + person.location.city +', '+ person.location.state;


  section.append(h3, img, paragraph);
  document.querySelector("#resource-field-3").appendChild(section);

}

// ******************************************* \\

// Fetch data from the API
fetch("https://randomuser.me/api")
  .then((response) => response.json())
  .then((data) => displayCard4(data.results))
  .catch(displayError);

// Display error
function displayError(error) {
  const section = document.querySelector("section.error-space");
  section.style.display = "block";

  const paragraph = document.createElement("p");
  paragraph.textContent = "Something went wrong!";

  const errorMessage = document.createElement("p");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = error;

  section.append(paragraph, errorMessage);
}

// Create a display card:
function displayCard4(results) {
  const person = results[0];
  const { title, first, last } = person.name;
  const fullName = `${title} ${first} ${last}`;

  const section = document.createElement("section");
  section.classList.add("card");

  const img = document.createElement("img");
  img.src = person.picture.large;
  img.alt = fullName;
  img.classList = img;

  const h3 = document.createElement("h3");
  h3.textContent = fullName;

  const paragraph = document.createElement("p");
  paragraph.textContent = 'Location: ' + person.location.city +', '+ person.location.state;


  section.append(h3, img, paragraph);
  document.querySelector("#resource-field-4").appendChild(section);

}

// ******************************************* \\

// Fetch data from the API
fetch("https://randomuser.me/api")
  .then((response) => response.json())
  .then((data) => displayCard5(data.results))
  .catch(displayError);

// Display error
function displayError(error) {
  const section = document.querySelector("section.error-space");
  section.style.display = "block";

  const paragraph = document.createElement("p");
  paragraph.textContent = "Something went wrong!";

  const errorMessage = document.createElement("p");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = error;

  section.append(paragraph, errorMessage);
}

// Create a display card:
function displayCard5(results) {
  const person = results[0];
  const { title, first, last } = person.name;
  const fullName = `${title} ${first} ${last}`;

  const section = document.createElement("section");
  section.classList.add("card");

  const img = document.createElement("img");
  img.src = person.picture.large;
  img.alt = fullName;
  img.classList = img;

  const h3 = document.createElement("h3");
  h3.textContent = fullName;

  const paragraph = document.createElement("p");
  paragraph.textContent = 'Location: ' + person.location.city +', '+ person.location.state;


  section.append(h3, img, paragraph);
  document.querySelector("#resource-field-5").appendChild(section);

}

// ******************************************* \\

// Fetch data from the API
fetch("https://randomuser.me/api")
  .then((response) => response.json())
  .then((data) => displayCard6(data.results))
  .catch(displayError);

// Display error
function displayError(error) {
  const section = document.querySelector("section.error-space");
  section.style.display = "block";

  const paragraph = document.createElement("p");
  paragraph.textContent = "Something went wrong!";

  const errorMessage = document.createElement("p");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = error;

  section.append(paragraph, errorMessage);
}

// Create a display card:
function displayCard6(results) {
  const person = results[0];
  const { title, first, last } = person.name;
  const fullName = `${title} ${first} ${last}`;

  const section = document.createElement("section");
  section.classList.add("card");

  const img = document.createElement("img");
  img.src = person.picture.large;
  img.alt = fullName;
  img.classList = img;

  const h3 = document.createElement("h3");
  h3.textContent = fullName;

  const paragraph = document.createElement("p");
  paragraph.textContent = 'Location: ' + person.location.city +', '+ person.location.state;


  section.append(h3, img, paragraph);
  document.querySelector("#resource-field-6").appendChild(section);

}

// ******************************************* \\