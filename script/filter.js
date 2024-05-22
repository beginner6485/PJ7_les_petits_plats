import { recipes } from "../data/recipes.js";
import { researchRecipes } from "./research.js";
import { createBtn, createTagContent } from "./tag.js";


const titleSt = "ingredient";
const titleNd ="appareil";
const titleRd = "ustensile";
const buttonSpace = document.getElementById("button-selection");
//const inputTag = document.createElement('input'); //tentative création extérieure

// map sur les élements
const ingredients = recipes.flatMap(recipe => recipe.ingredients.map(ingredient => ingredient.ingredient));
const appliances = recipes.map(recipe => recipe.appliance);
const ustensils = recipes.flatMap(recipe => recipe.ustensils.map(ustensil => ustensil.toLowerCase()));
const allItems = [new Set(ingredients), new Set(appliances), new Set(ustensils)];

// création des boutons
createBtn(titleSt, buttonSpace, []);
createBtn(titleNd, buttonSpace, []);
createBtn(titleRd, buttonSpace, []);


createTagContent( allItems); 