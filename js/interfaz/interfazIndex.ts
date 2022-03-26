import { Results as ResultsCharacter} from "../model/interfaceCharacter.js";

export const rowCards:Element|null = document.querySelector("#rowCards");
export const formData:Element|null = document.querySelector("#formData");
export const NameSearch:HTMLInputElement|null = document.querySelector("#name");
export const spinner: Element | null = document.querySelector("#Spinner");

export const error: Element | null = document.querySelector("#error");

export const generateCharacterCard = (character:ResultsCharacter)=>{
    
    const cardCol:Element =  document.createElement('div');
    const cardDiv:Element = document.createElement('div');
    const cardRow:Element = document.createElement('div');

    const cardColImage:Element = document.createElement('div');
    const cardImage:Element = document.createElement('img');

    const cardColCharacter:Element = document.createElement('div');
    const cardCharacterBody:Element = document.createElement('div');
    const cardCharacterTitle:Element = document.createElement('h5');
    const cardCharacterEpisodes:Element = document.createElement('p');
    const cardCharacterEpisodesText:Element = document.createElement('small')
    const cardCharacterDivHref:Element = document.createElement('div')
    const cardCharacterLink:Element = document.createElement('a')

    cardCol.classList.add("col-4");
    cardDiv.classList.add("card","mb-3","mt-5");
    cardDiv.setAttribute("style","max-width: 540px");

    cardRow.classList.add("row","g-0");
    cardColImage.classList.add("col-md-4");
    cardImage.classList.add("img-fluid", "rounded-start");
    cardImage.setAttribute("src",character.image);
    cardColCharacter.classList.add("col-md-8");
    cardCharacterBody.classList.add("card-body");
    cardCharacterTitle.textContent = character.name;
    cardCharacterEpisodesText.classList.add("text-muted");
    cardCharacterEpisodesText.textContent = "ha aparecido en " + character.episode?.length + " episodios";
    cardCharacterDivHref.classList.add("text-start","mt-3");
    cardCharacterLink.classList.add("btn","btn-primary");
    cardCharacterLink.setAttribute("href",`./personaje.html?id=${character.id}`);
    cardCharacterLink.textContent = "Ver personaje";

    
    cardCharacterEpisodes.append(cardCharacterEpisodesText);
    cardCharacterDivHref.append(cardCharacterLink);
    cardCharacterBody.append(cardCharacterTitle,cardCharacterEpisodesText,cardCharacterDivHref);
    cardColCharacter.append(cardCharacterBody);
    cardColImage.append(cardImage);
    cardRow.append(cardColImage, cardColCharacter);
    cardDiv.append(cardRow);
    cardCol.append(cardDiv);
    return cardCol;
}