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
  paragraph.textContent = person.location.city +', '+ person.location.state;


  section.append(img, h3, paragraph);
  document.querySelector(".people").appendChild(section);

}