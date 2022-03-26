class Conexion {
    private url:string;

    constructor() {
        this.url = "https://rickandmortyapi.com/api/character"; // ejemplo: Frank Sinatra/fly
    }

    async getCharacteres(){
        try{
            const consulta: any= await fetch(this.url)
            const data = await consulta.json();
            return data;
        }catch(error){
            throw error;
        }
    }

     async getCharacterName(nameCharacter:string){
        try{
            const consulta: any= await fetch(`${this.url}/?name=${nameCharacter}`)
            const data = await consulta.json();
            return data;
        }catch(error){
            throw error;
        }
    }

    async getCharacterId(id:string){
        try{
            const consulta: any= await fetch(`${this.url}/${id}`)
            const data = await consulta.json();
            return data;
        }catch(error){
            throw error;
        }
    }


}

export { Conexion };