import {recipes} from '../data/recipes.js';
import { recipeGenerate } from './recipe_generate.js';

const space = document.getElementById('space-research');

    function researchRecipes() {

            space.addEventListener('keyup', function(){

                let textTape = space.value.trim().toLowerCase();

                if(textTape.length >= 3){
                        let filteredRecipes = recipes.filter(recipe => {
                            let isNameMatch = recipe.name.toLowerCase().includes(textTape);
                            let isIngredientMatch = recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(textTape));
                            return isNameMatch|| isIngredientMatch
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
                // Générer les recettes initiales
             
    }
    recipeGenerate(recipes);
    researchRecipes();