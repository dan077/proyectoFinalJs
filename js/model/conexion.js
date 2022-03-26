var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Conexion {
    constructor() {
        this.url = "https://rickandmortyapi.com/api/character"; // ejemplo: Frank Sinatra/fly
    }
    getCharacteres() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const consulta = yield fetch(this.url);
                const data = yield consulta.json();
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getCharacterName(nameCharacter) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const consulta = yield fetch(`${this.url}/?name=${nameCharacter}`);
                const data = yield consulta.json();
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getCharacterId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const consulta = yield fetch(`${this.url}/${id}`);
                const data = yield consulta.json();
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
export { Conexion };
