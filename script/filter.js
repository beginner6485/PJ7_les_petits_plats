import { recipes } from "../data/recipes.js";
import { researchRecipes } from "./research.js";

let evenTriggered = false;

function filterOnclick(){
    // construction du tag

    const button_space = document.getElementById("button-selection");
    const ingredientSelection = document.createElement("div");
    ingredientSelection.classList.add("btn", "items");
    ingredientSelection.textContent = "ingredient";
     // contenu du tag Ingredients 

     let allIngredients = [];
     recipes.forEach(recipe => {
         recipe.ingredients.forEach(items => {
             allIngredients.push(items.ingredient.toLowerCase());
         })
     })
    const uniqueIngredientSet = new Set (allIngredients);
    let uniqueIngredientListArray = Array.from(uniqueIngredientSet);

    const tagAll = document.createElement('ul');
    tagAll.classList.add("tagAll");

    uniqueIngredientListArray.forEach( item => {
        const tagIngredient = document.createElement('li');
        tagIngredient.classList.add("tag");
        tagIngredient.textContent = item;

        tagAll.appendChild(tagIngredient); // Attention ici et pas à la fin !!!
    });



    //  Click sur Chevron     
    const iconElement = document.createElement('i');
    const tagSpace = document.createElement("ul");
    tagSpace.style.display = "none";
    iconElement.classList.add('fas',"fa-chevron-down","chevron");
    tagSpace.classList.add("tag-space-ingredient");
    const elementSpace = document.createElement('div');
    elementSpace.classList.add('elementSpace');
   
    iconElement.addEventListener('click', function(){

        evenTriggered = !evenTriggered ;

            if (evenTriggered){
                    iconElement.classList.remove("fa-chevron-down");
                    iconElement.classList.add("fa-chevron-up");
                    tagSpace.style.display ="block";
                } else{
                        iconElement.classList.remove('fa-chevron-up', "chevron");
                        iconElement.classList.add('fa-chevron-down', "chevron");
                        tagSpace.style.display ="none";
                    }
            })

    // input avec recherche
    const inputTag = document.createElement('input');
    inputTag.classList.add("space");
    inputTag.addEventListener('keyup', researchRecipes);

    button_space.appendChild(ingredientSelection);
    ingredientSelection.appendChild(iconElement);
    ingredientSelection.appendChild(elementSpace);
    elementSpace.appendChild(tagSpace);
    tagSpace.appendChild(tagAll);
    tagAll.appendChild(inputTag);
    //button_space.appendChild(appareilSelection)
    //button_space.appendChild(ustensilSelection);
    // ustensilSelection.appendChild(iconElement);
    
}

filterOnclick();