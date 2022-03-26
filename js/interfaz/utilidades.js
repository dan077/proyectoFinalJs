export const spinner = document.querySelector("#Spinner");
export const activateSpinner = () => {
    spinner === null || spinner === void 0 ? void 0 : spinner.setAttribute("style", "display:block");
};
export const desactivateSpinner = () => {
    spinner === null || spinner === void 0 ? void 0 : spinner.setAttribute("style", "display:none");
};
export const showError = (text, timeOut = 3000) => {
    const error = document.querySelector("#error");
    if (error) {
        error.textContent = text;
        error.setAttribute("style", "display:block");
        setTimeout(() => {
            error.textContent = "";
            error.setAttribute("style", "display:none");
        }, timeOut);
    }
    else {
        console.log("no pude encontrar el id 'error'");
    }
};
