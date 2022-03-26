export const spinner: Element | null = document.querySelector("#Spinner");


export const activateSpinner = ()=>{
    spinner?.setAttribute("style","display:block");
}

export const desactivateSpinner = ()=>{
    spinner?.setAttribute("style","display:none");
}

export const showError = (text:string,timeOut = 3000)=>{
    const error: Element | null = document.querySelector("#error");
    if(error){
        error.textContent = text;
        error.setAttribute("style","display:block");
        setTimeout(()=>{
            error.textContent = "";
            error.setAttribute("style","display:none");
        },timeOut)
    }
    else{
        console.log("no pude encontrar el id 'error'")
    } 
}

