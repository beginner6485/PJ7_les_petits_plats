import {recipes} from '../data/recipes.js';
import { recipeGenerate } from './recipe_generate.js';

const space = document.getElementById('space-research');

export function researchRecipes() {

            space.addEventListener('keyup', function(){

                let textTape = space.value.trim().toLowerCase();

                if(textTape.length >= 3){
                        let filteredRecipes = recipes.filter(recipe => {
                            let isNameMatch = recipe.name.toLowerCase().includes(textTape);
                            let isIngredientMatch = recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(textTape));
                            let isaAppliance = recipe.appliance.toLowerCase().includes(textTape);
                            let isUstensils = recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(textTape.toLowerCase()));
                            return isNameMatch|| isIngredientMatch || isaAppliance || isUstensils ;
                        });
                            const allRecipes = document.querySelectorAll('.col');
                            allRecipes.forEach(recipe => {
                                recipe.style.display = 'none';
                            });

                            recipeGenerate(filteredRecipes);
                } else {
                            // Si la saisie est inférieure à 3 caractères, afficher toutes les recettes
                            recipeGenerate(recipes);
                        }
            });
    }
    recipeGenerate(recipes);
    researchRecipes();