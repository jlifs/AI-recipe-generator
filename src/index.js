function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "38cc12b312104o45t5c1faaa8bf9b6c0";
  let context =
    "You are an expert chef and you love to share your recipes. Your mission is to generate a quick easy recipe that can be made in 30 minutes or less. Give the recipe title only in <strong/> with font size of 24 pixels at the top then separated by <br/> and list ingredients in bullet format,all separated by <br/> and number instructions in the recipe, also all separated by <br/>. Be sure to include section headings of Ingredients and Instructions in <strong/> element, keep all other text normal and exclude the use of all asterisk. Use the American metric system. Make sure to follow user instructions. Then add <br/> element and sign the recipe with '-AI Recipes' in a <strong/> element at the end.";
  let prompt = `User instructions: Generate a detailed recipe about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏱️ Generating a ${instructionsInput.value} recipe for you!</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");

recipeFormElement.addEventListener("submit", generateRecipe);