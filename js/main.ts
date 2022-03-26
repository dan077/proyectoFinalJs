import { Conexion } from "./model/conexion.js"
import * as UI from "./interfaz/interfazIndex.js";
import { Character, Results as ResultsCharacter, ArrResults as ArrResultsCharacter } from "./model/interfaceCharacter.js";
import { activateSpinner,desactivateSpinner, showError } from "./interfaz/utilidades.js";

const conexion:Conexion = new Conexion();

const init =async () => {
    activateSpinner();
    const characters:Character = await conexion.getCharacteres();
    console.log(characters.results)
    const arrCharacters:ArrResultsCharacter = characters.results;
    createCharacters(arrCharacters);
    desactivateSpinner();
}

UI.formData?.addEventListener("submit",async (e)=>{
    e.preventDefault();

    if(UI.NameSearch){
        if(UI.NameSearch?.value.trim() !== ""){
            activateSpinner();
            const characters:Character = await conexion.getCharacterName(UI.NameSearch.value);

            if(!characters.error){
                const arrCharacters:ArrResultsCharacter = characters.results;

                if(UI.rowCards){
                    UI.rowCards.innerHTML="";
                    createCharacters(arrCharacters)
                }
                else{
                     showError("Ha ocurrido un error interno. no se puedo acceder al input de busqueda.")
                }
            }else{    
                showError("Nombre no encontrado. verificalo e introducelo de nuevamente")    
            }
            desactivateSpinner();
            
        }else{
            showError("El input está vacio, ingresa un nombre",2000)
        }
        
    }else{
        showError("Lo sentimos, no logramos encontrar el input.")
    }
    
})

export const createCharacters = (characters:ArrResultsCharacter)=>{
    if(characters)
        characters.forEach(character =>{
            UI.rowCards?.append(UI.generateCharacterCard(character));
        })
    else
        showError("No pudimos obtener los personajes. contacte con soporte.")
}


init()