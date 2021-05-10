const YOUR_APP_ID = "dd95e482";
const YOUR_APP_KEY = "97617334d58bc72d14c9934ffeb52efa";


const requestUrl = `https://api.edamam.com/search?q=kale&app_id=dd95e482&app_key=97617334d58bc72d14c9934ffeb52efa`

let foodToSearch = null;

function handleRecipeClick() {
  fetchRecipe(foodToSearch);
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}

const recipeLink = document.querySelector ("#recipe-label")
async function fetchRecipe(food) {
  let response = await fetch (`https://api.edamam.com/search?q=${foodToSearch}&app_id=dd95e482&app_key=97617334d58bc72d14c9934ffeb52efa`);
  let data = await response.json();

  //iterate(forloop)through all of the recipes 
  let allRecipes = data.hits 
  for (i=0; i<allRecipes.length; i++){
    addRecipeToWebpage(data.hits[i])
  }
  
}

// getting the recipe section from the html
const recipeSection = document.querySelector("#recipe-section")

function addToList(ingredientName){
  // create the ingredients list everytie we get a recipe
  // <ul test-align = center ></ul>
  const ingredientList = document.createElement("ul")
  // ingredientList.setAttribute()
  // <li> ingredientName </li>
  let li = document.createElement("li")
  li.innerHTML = ingredientName
  ingredientList.appendChild(li)
  recipeSection.appendChild(ingredientList)
}


function addImage(imageUrl){
  // <img src = "http.." width, height />
  let image = document.createElement("img");
  image.setAttribute("src", imageUrl);
  image.setAttribute("width","200");
  image.setAttribute("height", "200");
  recipeSection.appendChild(image)
}


function addRecipeToWebpage(recipe){

  // <a href = "http.."> chicken</a>
  // craete the a tag
  let recipeLink = document.createElement("a")
  recipeLink.target = "_blank"
  recipeLink.innerHTML = recipe.recipe.label
  let recipeUrl = recipe.recipe.url
  recipeLink.setAttribute("href", recipeUrl)
  recipeSection.appendChild(recipeLink)
  
//  find the where the ingredients is in the list 
//  add to the list of ingrdients

  let ingredients = recipe.recipe.ingredients
  ingredients.forEach((ingredient)=>
    addToList(ingredient.text)
  )
  let recipeImage = recipe.recipe.image
  addImage(recipeImage);
  let br = document.createElement("br")
  recipeSection.appendChild(br)

}