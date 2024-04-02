import { recipes } from '../data/recipes.js';

export function recipeGenerate(recipes) {
    const row = document.querySelector('.row'); 

    recipes.forEach(recipe => {
        // create element div col - 1st div
        const col = document.createElement('div');
        col.classList.add('col', 'col-md-4', 'custom-rounded');

        // create element div recipe with details. 
        const recipeSpace = document.createElement('div'); 
        recipeSpace.classList.add('recipe-space');

        //img
            const imgDiv = document.createElement('div');
            imgDiv.classList.add('img-div');

            const img = document.createElement('img');
            img.src = recipe.image;
            img.setAttribute('alt',recipe.name);
            img.classList.add('recipe-img-style');
            
            const time = document.createElement('div');
            time.textContent = recipe.time +" min";
            time.classList.add('time-recipe');


        const recipeMargin = document.createElement('div');
        recipeMargin.classList.add('recipeMargin');

        const title = document.createElement('h5');
        title.classList.add('recipe-title');
        title.textContent = recipe.name;

        const recipeContext = document.createElement('div');
        recipeContext.classList.add('state-recipe');
        recipeContext.textContent = "Recette";

        const description = document.createElement('div');
        description.classList.add('description-txt');
        description.textContent = recipe.description;

        const ingredientTitle = document.createElement('div');
        ingredientTitle.classList.add('ingredient-title');
        ingredientTitle.textContent = "Ingrédients";

        const ingredientSpace= document.createElement('div');
        ingredientSpace.classList.add('ingredient-space')
        
        // ingredients recipe
        let ingredientList = recipe.ingredients;
        let ingredientsArray = [];
        const recipeIngredients = document.createElement('div');

        ingredientList.forEach((items) =>{

            let quantity = items.quantity;
            let unity = items.unit;
            let ingredient = items.ingredient;

            if (typeof quantity !== "undefined") {
                ingredientsArray.push(quantity);
            }
        
            if (typeof unity !== "undefined") {
                ingredientsArray.push(unity);
            }
        
            // Ajoutez l'ingrédient à ingredientsArray
            ingredientsArray.push(ingredient);

            const elementRecipe = document.createElement('div');
            elementRecipe.classList.add('elements');

            const underElement = document.createElement('div');
            underElement.classList.add('underElement');

            const quantitySpan = document.createElement('span');
            quantitySpan.textContent = quantity;
            quantitySpan.classList.add('quantity'); 

            const ingredientSpan = document.createElement('span');
            ingredientSpan.textContent = ingredient;
            ingredientSpan.classList.add('ingredient'); 

            const unitySpan = document.createElement('span');
            unitySpan.textContent = unity;
            unitySpan.classList.add('unity'); 

            recipeIngredients.classList.add('ingredientsArray');
            recipeIngredients.appendChild(elementRecipe);
            elementRecipe.appendChild(ingredientSpan);
            elementRecipe.appendChild(underElement);
            underElement.appendChild(quantitySpan);
            underElement.appendChild(unitySpan);

            // Ajouter l'objet ingrédient à la liste d'ingrédients
            ingredientsArray.push(items);
        });
       
        // send to DOM
        row.appendChild(col);
        col.appendChild(recipeSpace); 
    
        recipeSpace.appendChild(time);
        recipeSpace.appendChild(imgDiv);
        imgDiv.appendChild(img);
        imgDiv.appendChild(recipeMargin);
        recipeMargin.appendChild(title);
        recipeMargin.appendChild(recipeContext);
        recipeMargin.appendChild(description);
        recipeMargin.appendChild(ingredientTitle);
        recipeMargin.appendChild(ingredientSpace);
        ingredientSpace.appendChild(recipeIngredients);
        });
}

