import {recipes} from '../data/recipes.js';
import { recipeGenerate } from './recipe_generate.js';
import { selectedTags } from './filter.js';

const space = document.getElementById('space-research');

// Fonction de recherche de recettes
function researchRecipes() {
    const textTape = space.value.trim().toLowerCase();
    const filteredRecipes = [];

    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        const isNameMatch = recipe.name.toLowerCase().indexOf(textTape) !== -1;
        let isIngredientMatch = false;
        const isApplianceMatch = recipe.appliance.toLowerCase().indexOf(textTape) !== -1;
        let isUstensilMatch = false;
        const isDescriptionMatch = recipe.description.toLowerCase().indexOf(textTape) !== -1;

        for (let j = 0; j < recipe.ingredients.length; j++) {
            if (recipe.ingredients[j].ingredient.toLowerCase().indexOf(textTape) !== -1) {
                isIngredientMatch = true;
                break;
            }
        }

        for (let k = 0; k < recipe.ustensils.length; k++) {
            if (recipe.ustensils[k].toLowerCase().indexOf(textTape) !== -1) {
                isUstensilMatch = true;
                break;
            }
        }

        let isTagMatch = true;

        for (let l = 0; l < selectedTags.ingredients.length; l++) {
            const tag = selectedTags.ingredients[l];
            let ingredientMatch = false;
            for (let m = 0; m < recipe.ingredients.length; m++) {
                if (recipe.ingredients[m].ingredient.toLowerCase() === tag) {
                    ingredientMatch = true;
                    break;
                }
            }
            if (!ingredientMatch) {
                isTagMatch = false;
                break;
            }
        }

        if (isTagMatch) {
            for (let n = 0; n < selectedTags.appliances.length; n++) {
                if (recipe.appliance.toLowerCase() !== selectedTags.appliances[n]) {
                    isTagMatch = false;
                    break;
                }
            }
        }

        if (isTagMatch) {
            for (let o = 0; o < selectedTags.ustensils.length; o++) {
                let ustensilMatch = false;
                for (let p = 0; p < recipe.ustensils.length; p++) {
                    if (recipe.ustensils[p].toLowerCase() === selectedTags.ustensils[o]) {
                        ustensilMatch = true;
                        break;
                    }
                }
                if (!ustensilMatch) {
                    isTagMatch = false;
                    break;
                }
            }
        }

        if ((isNameMatch || isIngredientMatch || isApplianceMatch || isUstensilMatch || isDescriptionMatch) && isTagMatch) {
            filteredRecipes.push(recipe);
        }
    }

    const allRecipes = document.querySelectorAll('.col');
    for (let q = 0; q < allRecipes.length; q++) {
        allRecipes[q].style.display = 'none';
    }

    recipeGenerate(filteredRecipes);
}

// Gestion de la recherche par mot-clé
space.addEventListener('keyup', function() {
    if (space.value.trim().length >= 3) {
        researchRecipes();
    } else {
        recipeGenerate(recipes);
    }
});

recipeGenerate(recipes);
