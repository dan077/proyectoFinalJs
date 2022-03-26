var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Conexion } from "./model/conexion.js";
import * as UIPersonaje from "./interfaz/interfazPersonaje.js";
import { activateSpinner, desactivateSpinner, showError } from "./interfaz/utilidades.js";
import { formData } from "./interfaz/interfazPersonaje.js";
const conexion = new Conexion();
const getId = () => {
    let params = new URLSearchParams(location.search);
    let id = params.get("id");
    return id;
};
const getIconStatus = (status) => {
    switch (status.toLowerCase()) {
        case "alive":
            return ` <i class="fa-solid fa-heart-circle-check"></i>`;
        case "unknown":
            return `<i class="fa-solid fa-heart-circle-exclamation"></i>`;
        case "dead":
            return `<i class="fa-solid fa-heart-crack"></i>`;
        default:
            return `<i class="fa-solid fa-heart"></i>`;
    }
};
const errorRedirectIndex = (msg) => {
    if (UIPersonaje.container) {
        let timeOut = 4000;
        UIPersonaje.container.innerHTML = `
                <div class="alert alert-danger mt-4 text-center" id="error" style="display: none" role="alert">
                </div>`;
        showError(`${msg} será redireccionado en ${timeOut / 1000}s`, timeOut);
        setTimeout(() => {
            let Indexroute = window.location.href.split("/");
            Indexroute.pop(); //Sería valido solamente para este proyecto. ya que con urls más complejas no sería tan sencillo. a no ser que guardara el dominio en una variable var.
            window.location.href = `${Indexroute.join("/")}`;
        }, timeOut);
    }
};
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (formData)
        formData.innerHTML = ""; //para que no puedan consultar personajes aquí!.
    else {
        console.log("no pude encontrar el formulario pude encontrar");
    }
    activateSpinner();
    const id = getId();
    if (id) {
        const character = yield conexion.getCharacterId(id);
        if (!character.error) {
            (_a = UIPersonaje.image) === null || _a === void 0 ? void 0 : _a.setAttribute("src", character.image);
            if (UIPersonaje.name)
                UIPersonaje.name.textContent = character.name;
            if (UIPersonaje.infoEpisodes)
                UIPersonaje.infoEpisodes.textContent = "ha aparecido en " + ((_b = character.episode) === null || _b === void 0 ? void 0 : _b.length) + " episodios";
            if (UIPersonaje.status) {
                let iconStatus = getIconStatus(character.status);
                UIPersonaje.status.innerHTML = ` ${character.status} ${iconStatus}`;
            }
            if (UIPersonaje.gender)
                UIPersonaje.gender.textContent = character.gender;
            if (UIPersonaje.location)
                UIPersonaje.location.textContent = character.location.name;
        }
        else {
            errorRedirectIndex("lo sentimos, no podemos obtener la informacion de ese id.");
        }
    }
    else {
        errorRedirectIndex("lo sentimos, no pudimos encontrar en los parametros de la url el id.");
    }
    desactivateSpinner();
});
init();
