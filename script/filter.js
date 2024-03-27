import { recipes } from "../data/recipes.js";

function filterOnclick(){
    
    const button_space = document.getElementById("button-selection");
    const iconElement = document.createElement('i');
    iconElement.classList.add('fas', "fa-chevron-down");

    const ingredientSelection = document.createElement("div");
    ingredientSelection.classList.add("btn");
    ingredientSelection.textContent = "ingredient";
    

    const appareilSelection = document.createElement("div");
    appareilSelection.classList.add("btn");
    appareilSelection.textContent ="appareil";

    const ustensilSelection = document.createElement("div");
    ustensilSelection.classList.add("btn");
    ustensilSelection.textContent ="ustensil";

    button_space.appendChild(ingredientSelection);
    ingredientSelection.appendChild(iconElement);
    button_space.appendChild(appareilSelection);
    button_space.appendChild(ustensilSelection);


}

filterOnclick();