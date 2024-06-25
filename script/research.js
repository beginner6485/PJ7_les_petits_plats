import {recipes} from '../data/recipes.js';
import { recipeGenerate } from './recipe_generate.js';
import { selectedTags } from './filter.js';


const space = document.getElementById('space-research');

export function researchRecipes() {
    let textTape = space.value.trim().toLowerCase();

    let filteredRecipes = recipes.filter(recipe => {
        let isNameMatch = recipe.name.toLowerCase().includes(textTape);
        let isIngredientMatch = recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(textTape));
        let isApplianceMatch = recipe.appliance.toLowerCase().includes(textTape);
        let isUstensilMatch = recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(textTape));
        let isDescriptionMatch = recipe.description.toLowerCase().includes(textTape);

        let isTagMatch = selectedTags.ingredients.every(tag => recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase() === tag)) &&
                         selectedTags.appliances.every(tag => recipe.appliance.toLowerCase() === tag) &&
                         selectedTags.ustensils.every(tag => recipe.ustensils.some(ustensil => ustensil.toLowerCase() === tag));

        return (isNameMatch || isIngredientMatch || isApplianceMatch || isUstensilMatch || isDescriptionMatch) && isTagMatch;
    });

    const allRecipes = document.querySelectorAll('.col');
    allRecipes.forEach(recipe => {
        recipe.style.display = 'none';
    });

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