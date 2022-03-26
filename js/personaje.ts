import { Conexion } from "./model/conexion.js"
import { Results as ResultsCharacter} from "./model/interfaceCharacter.js";
import * as UI from "./interfaz/interfazIndex.js";
import * as UIPersonaje from "./interfaz/interfazPersonaje.js"; 
import { activateSpinner, desactivateSpinner, showError } from "./interfaz/utilidades.js";
import { formData } from "./interfaz/interfazPersonaje.js";

const conexion:Conexion = new Conexion();
const getId = ():string|null=>{
    let params:URLSearchParams = new URLSearchParams(location.search);
    let id:string|null = params.get("id");
    return id;
}

const getIconStatus = (status:string):string=>{
           switch (status.toLowerCase()) {
               case "alive":
                   return ` <i class="fa-solid fa-heart-circle-check"></i>`
               case "unknown":
                   return `<i class="fa-solid fa-heart-circle-exclamation"></i>`
               case "dead":
                   return  `<i class="fa-solid fa-heart-crack"></i>`
               default:
                   return `<i class="fa-solid fa-heart"></i>`
           }

}

const errorRedirectIndex = (msg:string)=>{
    if(UIPersonaje.container){
        let timeOut:number = 4000;
        UIPersonaje.container.innerHTML=`
                <div class="alert alert-danger mt-4 text-center" id="error" style="display: none" role="alert">
                </div>`
        showError(`${msg} será redireccionado en ${timeOut/1000}s`,timeOut);
        setTimeout(()=>{
           let Indexroute=  window.location.href.split("/") 
           Indexroute.pop();//Sería valido solamente para este proyecto. ya que con urls más complejas no sería tan sencillo. a no ser que guardara el dominio en una variable var.
           window.location.href = `${Indexroute.join("/")}`;
        },timeOut)
    }
}

const init = async ()=>{
    if(formData)
        formData.innerHTML=""; //para que no puedan consultar personajes aquí!.
    else{
        console.log("no pude encontrar el formulario pude encontrar")
    }
    activateSpinner();
    const id:string|null = getId();
    if(id){
        const character:ResultsCharacter = await conexion.getCharacterId(id);

        if(!character.error){
            UIPersonaje.image?.setAttribute("src",character.image);

            if(UIPersonaje.name)
                UIPersonaje.name.textContent = character.name;
            if(UIPersonaje.infoEpisodes)
                UIPersonaje.infoEpisodes.textContent = "ha aparecido en " + character.episode?.length + " episodios"  ;
            if(UIPersonaje.status){
                let iconStatus:string = getIconStatus(character.status);
                    UIPersonaje.status.innerHTML = ` ${character.status} ${iconStatus}`;
            }
            if (UIPersonaje.gender)
                    UIPersonaje.gender.textContent = character.gender;
            if( UIPersonaje.location)
                    UIPersonaje.location.textContent = character.location.name;
        }else{
            errorRedirectIndex("lo sentimos, no podemos obtener la informacion de ese id.");
        }
    }
    else{
         errorRedirectIndex("lo sentimos, no pudimos encontrar en los parametros de la url el id.");
    }
    desactivateSpinner();
}

init();
