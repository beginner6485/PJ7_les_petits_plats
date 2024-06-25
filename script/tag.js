import { recipes } from "../data/recipes.js";
import { recipeGenerate } from "./recipe_generate.js";
import { researchRecipes } from "./research.js";

// construction des boutons Tags

let evenTriggered = false;

export function onClickChevron(chevron, tagSpace){
    
    if (chevron.classList.contains("fa-chevron-down")) {
        chevron.classList.remove("fa-chevron-down");
        chevron.classList.add("fa-chevron-up");
        tagSpace.style.display ="block";
    } else {
        chevron.classList.remove("fa-chevron-up");
        chevron.classList.add("fa-chevron-down"); 
        tagSpace.style.display ="none";
    }
}

// création des boutons et contenu
export function createBtn(text, buttonSpace, items){
    const button = document.createElement("div");
    button.classList.add("btn", "items");
    
    const chevron = document.createElement('i');
    const textTitle = document.createElement("div");
    const chevronSpace = document.createElement("div");
    
    chevron.classList.add('fas',"fa-chevron-down","chevron");
    textTitle.classList.add("txt");
    chevronSpace.classList.add("chevron-space");

    textTitle.textContent = text;
    button.appendChild(chevronSpace);
    chevronSpace.appendChild(textTitle);
    chevronSpace.appendChild(chevron);
    
    const elementSpace = document.createElement('div');
    const tagSpace = document.createElement("div");
    tagSpace.style.display = "none";
    elementSpace.classList.add('elementSpace');
    
    // création des inputs
    const inputTag = document.createElement('input');
    inputTag.classList.add("space");

    if (text === "ingredient") {
        tagSpace.classList.add("ingredient-btn"); 
    } else if (text === "appareil") {
        tagSpace.classList.add("appareil-btn");
    } else if (text === "ustensile") {
        tagSpace.classList.add("ustensile-btn");
    }
    chevron.addEventListener('click', function() {
        onClickChevron(chevron, tagSpace);
    });

    buttonSpace.appendChild(button);
    button.appendChild(elementSpace);
    elementSpace.appendChild(tagSpace);
    tagSpace.appendChild(inputTag);

    inputTag.addEventListener('keyup', function() {
        let textWrite = inputTag.value;

        if (textWrite.length >= 3){
            console.log(" start at 3 = " , textWrite) 
        }
    
    });
}

const cross = document.createElement('i');
cross.classList.add('fas','fa-times-circle');


export function createTagContent(allItems, buttonSpace, selectedTags) {
    
    const spaceIng = document.querySelector(".ingredient-btn");
    const spaceApp = document.querySelector(".appareil-btn");
    const spaceUst = document.querySelector(".ustensile-btn");
    
    const tabItems = [spaceIng, spaceApp, spaceUst];

    // Créer la div pour afficher les éléments cliqués
    const liClick = document.createElement('div');
    liClick.classList.add('li-click');
    buttonSpace.appendChild(liClick);

    for(let i=0; i < allItems.length; i++){
        allItems[i].forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            tabItems[i].appendChild(listItem);

                // Initialisation de la propriété clicked pour chaque élément 
                listItem.clicked = false;

                listItem.addEventListener('click', () => {
                // Vérification si l'élement a été cliqué
                if(listItem.clicked){
                    return;
                }
                console.log("a cliqué sur :", listItem);

                 // Marquer l'élément comme cliqué
                listItem.clicked = true; 

                // nous créons une copie des items cliqués
                const newItemBtn = document.createElement('div');
                newItemBtn.classList.add('new-item-btn');
                liClick.appendChild(newItemBtn);
                
                const newItem = document.createElement('li');
                newItem.classList.add("new-item")
                newItem.textContent = listItem.textContent;
                newItemBtn.appendChild(newItem);
                    
                const crossClose = document.createElement('i');
                crossClose.classList.add('fas','fa-times-circle');

                // Ajouter le tag sélectionné dans l'objet selectedTags
                if (listItem.clicked = true){
                    if (tabItems[i].classList.contains('ingredient-btn')) {
                    selectedTags.ingredients.push(listItem.textContent.toLowerCase());
                } else if (tabItems[i].classList.contains('appareil-btn')) {
                    selectedTags.appliances.push(listItem.textContent.toLowerCase());
                } else if (tabItems[i].classList.contains('ustensile-btn')) {
                    selectedTags.ustensils.push(listItem.textContent.toLowerCase());
                }}else{
                    recipeGenerate();
                }
                // Mettre à jour les recettes affichées
                researchRecipes();
    
                crossClose.addEventListener('click', function(){
                    newItemBtn.style.display = "none";
                    newItem.style.display = "none";
                    crossClose.style.display="none";
                    // Réinitialiser le statut cliqué
                    listItem.clicked = false;
                    //réinitilise les recettes affichées
                    // recipeGenerate(recipes);
                });
                newItemBtn.appendChild(crossClose)
                
                // Mettre à jour les recettes affichées
                researchRecipes();
            
                
                
            });
        })
    }
}


// fonction click sur tag 
export function handleClick() {
    const tagClick = document.createElement('div');
    tagClick.classList.add('tagClick');
    tagClick.textContent = item;
    cross.addEventListener('click', function(){
        tagClick.style.display = "none";
    });

    button_space.appendChild(tagClick);
    tagClick.appendChild(cross);

    tagIngredient.removeEventListener('click', handleClick);
}
