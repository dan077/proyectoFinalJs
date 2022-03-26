var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
import { Conexion } from "./model/conexion.js";
import * as UI from "./interfaz/interfazIndex.js";
import { activateSpinner, desactivateSpinner, showError } from "./interfaz/utilidades.js";
const conexion = new Conexion();
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    activateSpinner();
    const characters = yield conexion.getCharacteres();
    console.log(characters.results);
    const arrCharacters = characters.results;
    createCharacters(arrCharacters);
    desactivateSpinner();
});
(_a = UI.formData) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    e.preventDefault();
    if (UI.NameSearch) {
        if (((_b = UI.NameSearch) === null || _b === void 0 ? void 0 : _b.value.trim()) !== "") {
            activateSpinner();
            const characters = yield conexion.getCharacterName(UI.NameSearch.value);
            if (!characters.error) {
                const arrCharacters = characters.results;
                if (UI.rowCards) {
                    UI.rowCards.innerHTML = "";
                    createCharacters(arrCharacters);
                }
                else {
                    showError("Ha ocurrido un error interno. no se puedo acceder al input de busqueda.");
                }
            }
            else {
                showError("Nombre no encontrado. verificalo e introducelo de nuevamente");
            }
            desactivateSpinner();
        }
        else {
            showError("El input está vacio, ingresa un nombre", 2000);
        }
    }
    else {
        showError("Lo sentimos, no logramos encontrar el input.");
    }
}));
export const createCharacters = (characters) => {
    if (characters)
        characters.forEach(character => {
            var _a;
            (_a = UI.rowCards) === null || _a === void 0 ? void 0 : _a.append(UI.generateCharacterCard(character));
        });
    else
        showError("No pudimos obtener los personajes. contacte con soporte.");
};
init();
