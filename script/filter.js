import { recipes } from "../data/recipes.js";
import { createBtn, createTagContent } from "./tag.js";
import { recipeGenerate } from "./recipe_generate.js";


const titleSt = "ingredient";
const titleNd ="appareil";
const titleRd = "ustensile";
const buttonSpace = document.getElementById("button-selection");

export const selectedTags = {
    ingredients: [],
    appliances: [],
    ustensils: []
};


// map sur les élements
const ingredients = recipes.flatMap(recipe => recipe.ingredients.map(ingredient => ingredient.ingredient));
const appliances = recipes.map(recipe => recipe.appliance);
const ustensils = recipes.flatMap(recipe => recipe.ustensils.map(ustensil => ustensil.toLowerCase()));
const allItems = [new Set(ingredients), new Set(appliances), new Set(ustensils)];

// création des boutons
createBtn(titleSt, buttonSpace, []);
createBtn(titleNd, buttonSpace, []);
createBtn(titleRd, buttonSpace, []);

createTagContent(allItems, buttonSpace, selectedTags); 

// Initialiser la recherche avec toutes les recettes
recipeGenerate(recipes);

