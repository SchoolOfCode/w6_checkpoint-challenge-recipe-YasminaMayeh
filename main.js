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

  //iterate(forloop) through all of the recipes 
  let allRecipes = data.hits 
  for (i=0; i<
    
    3; i++){
    addRecipeToWebpage(data.hits[i], i) // i = 0, 1, 2
  }
}

function addRecipeToWebpage(recipe, index){
  // check if first, second or third recipe is being added
  let recipeDiv = document.querySelector(".first-recipe")
  if (index===1) {
    recipeDiv = document.querySelector(".second-recipe")
  } else if (index===2){
    recipeDiv = document.querySelector(".third-recipe")
  }

  // recipeDiv = <div id= whatever-recipe>
  // div get <a>, <img>, <ul>

  // <a href = "http.."> chicken</a>
  // get the <a> tag. add href attribute. add label.
  const aTag = recipeDiv.getElementsByTagName("a")[0]
  let recipeUrl = recipe.recipe.url
  aTag.setAttribute("href", recipeUrl)
  aTag.innerHTML = recipe.recipe.label

  // get the <img> tag. add image
  const imgTag = recipeDiv.getElementsByTagName("img")[0]
  addImage(imgTag, recipe.recipe.image)

  // get the <ul> tag
  const ulTag = recipeDiv.getElementsByTagName("ul")[0]
  // add ingrediats as li's 
  // clear the results after 
  ulTag.innerHTML = ""
  let ingredients = recipe.recipe.ingredients
  ingredients.forEach((ingredient)=>
    addToList(ulTag, ingredient.text)
  )
}

// ingredient list == <ul> </ul>
function addToList(ingredientList, ingredientName){
  // create the ingredients list everytie we get a recipe
  // <ul test-align = center ></ul>
  // ingredientList.setAttribute()
  // <li> ingredientName </li>
  let li = document.createElement("li")
  li.innerHTML = ingredientName
  ingredientList.appendChild(li)
}


function addImage(image, imageUrl){
  // <img src = "http.." width, height />
  image.setAttribute("src", imageUrl);
  image.setAttribute("width","200");
  image.setAttribute("height", "200");
}