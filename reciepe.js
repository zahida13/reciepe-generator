const getMealBtn = document.querySelector("#get_meal");
const mealContainer = document.querySelector("#meal");

getMealBtn.addEventListener("click", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((response) => creteMeal(response.meals[0]));
});

function creteMeal(meal) {
  const ingredients = [];
  for (let index = 0; index < 20; index++) {
    const element = meal[`strIngredient${index + 1}`];
    if (element) ingredients.push(element);
  }

  mealContainer.innerHTML = ` <div class="row">
    <div class="column five">
    <img src='${meal.strMealThumb}' alt="meal img"></div>
    </div>
    <div class='column seven'>
    <h4>${meal.strMeal}</h4>
    <p><strong> caategory: </strong>${meal.strCategory}</p>
    <p><strong> area: </strong>${meal.strArea}</p>
    <p><strong> tags: </strong>${meal.strTags}</p>
    <h5>Ingredients</h5>
    <ul>
      ${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
      
    </ul>

    
    <h3>Recipe</h3>
    <p>${meal.strInstructions}</p> 
       </div>
    `;
}
