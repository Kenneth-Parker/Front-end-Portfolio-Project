 // Function to fetch data from the API and display the card
 function fetchAndDisplayCard(resourceId) {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) => displayCard(data.results, resourceId))
      .catch((error) => displayError(error, resourceId));
  }

  // Function to display an error
  function displayError(error, resourceId) {
    const section = document.querySelector(`#resource-field-${resourceId}`);
    section.style.display = "block";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Something went wrong!";

    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = error;

    section.append(paragraph, errorMessage);
  }

  // Function to create a display card
  function displayCard(results, resourceId) {
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
    document.querySelector(`#resource-field-${resourceId}`).appendChild(section);
  }

  // Fetch data and display cards for each resource
  for (let i = 1; i <= 6; i++) {
    fetchAndDisplayCard(i);
  }