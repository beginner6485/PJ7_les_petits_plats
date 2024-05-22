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

    //tentative pour générer un input externe
    // for (let i=0; i < 3; i++){
    //     inputTag.classList.add("space");
    //     tagSpace.appendChild(inputTag);
    //     console.log(inputTag)
    // }


    // Stocke le inputTag dans l'objet global

    // écoute le keyup des tags
    inputTag.addEventListener('keyup', function() {
        let textWrite = inputTag.value;

        if (textWrite.length >= 3){
            console.log(" start at 3 = " , textWrite)
           
        }
    
    });
}


//
export function createTagContent(allItems) {

    const spaceIng = document.querySelector(".ingredient-btn");
    const spaceApp = document.querySelector(".appareil-btn");
    const spaceUst = document.querySelector(".ustensile-btn");
    const tabItems = [spaceIng, spaceApp, spaceUst];
    console.log(tabItems)

    for(let i=0; i < allItems.length; i++){
        allItems[i].forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            tabItems[i].appendChild(listItem);
        })
    }
}

// fonction click sur tag 
export function handleClick() {
    const tagClick = document.createElement('div');
    tagClick.classList.add('tagClick');
    tagClick.textContent = item;
    const cross = document.createElement('i');
    cross.classList.add('fas','fa-times-circle');
    cross.addEventListener('click', function(){
        tagClick.style.display = "none";
    });

    button_space.appendChild(tagClick);
    tagClick.appendChild(cross);

    tagIngredient.removeEventListener('click', handleClick);
}

