import { researchRecipes } from "./research.js";


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
export function createBtn(text, buttonSpace){
    const button = document.createElement("div");
    const chevron = document.createElement('i');
    const textTitle = document.createElement("div");
    const chevronSpace = document.createElement("div");
    const elementSpace = document.createElement('div');
    const tagSpace = document.createElement("div");
    const inputTag = document.createElement('input');
   
    button.classList.add("btn", "items");
    chevron.classList.add('fas',"fa-chevron-down","chevron");
    textTitle.classList.add("txt");
    chevronSpace.classList.add("chevron-space");
    elementSpace.classList.add('elementSpace');
    textTitle.textContent = text;
    inputTag.classList.add("space");
    tagSpace.classList.add(`${text}-btn`);
    tagSpace.style.display = "none";

    chevronSpace.append(textTitle, chevron);
    button.append(chevronSpace, elementSpace);
    buttonSpace.appendChild(button);
    elementSpace.appendChild(tagSpace);
    tagSpace.appendChild(inputTag);
    
    chevron.addEventListener('click', function() {
        onClickChevron(chevron, tagSpace);
    });

 
 // recherche par mots-clés #tag
inputTag.addEventListener('keyup', function() {
    let textWrite = inputTag.value.toLowerCase();

    itemMark(textWrite, tagSpace);
});

function itemMark(textWrite, tagSpace) {
    // Obtenir tous les éléments de la liste
    let listItems = Array.from(tagSpace.querySelectorAll('li'));

    if (textWrite) {
        listItems.forEach(item => {
            item.innerHTML = item.textContent;
            item.style.backgroundColor = '';
            item.style.display = ''; // Réinitialiser l'affichage des éléments
        });

        // Filtrer et marquer les éléments correspondants
        let matchedItems = listItems.filter(item => 
            item.textContent.toLowerCase().includes(textWrite)
        );
        matchedItems.forEach(item => {
            item.style.backgroundColor = '#FFD15B'; 
        });

        // Masquer les éléments non correspondants
        let unmatchedItems = listItems.filter(item => 
            !item.textContent.toLowerCase().includes(textWrite)
        );
        unmatchedItems.forEach(item => {
            item.style.display = 'none'; 
        });
    } else {
        // Réinitialiser tous les éléments
        listItems.forEach(item => {
            item.style.display = ''; // Réafficher tous les éléments
            item.style.backgroundColor = ''; 
        });
    }
}
}

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
                 // Marquer l'élément comme cliqué
                listItem.clicked = true; 

                // nous créons une copie des items cliqués
                const newItemBtn = document.createElement('div');
                const tagItem = document.createElement('li');
                const crossClose = document.createElement('i');

                newItemBtn.classList.add('new-item-btn');
                tagItem.classList.add("tag-item")
                crossClose.classList.add('fas','fa-times-circle');
                tagItem.textContent = listItem.textContent;

                liClick.appendChild(newItemBtn);
                newItemBtn.appendChild(tagItem);
                tagItem.appendChild(crossClose)

                // Ajouter le tag sélectionné dans l'objet selectedTags
                const tagCategory = tabItems[i].classList.contains('ingredient-btn') ? 'ingredients' :
                tabItems[i].classList.contains('appareil-btn') ? 'appliances' : 'ustensils';
                selectedTags[tagCategory].push(listItem.textContent.toLowerCase());
    
                // Mettre à jour les recettes affichées
                researchRecipes();
                
                crossClose.addEventListener('click', function(){
                    newItemBtn.remove();
                    listItem.clicked = false;
                    const index = selectedTags[tagCategory].indexOf(listItem.textContent.toLowerCase());
                    if (index !== -1) selectedTags[tagCategory].splice(index, 1);

                    researchRecipes();
                });    
                
            });
        })
    }
}

