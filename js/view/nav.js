"use strict";
let body = document.querySelector("body");
const nav = document.createElement('nav');
nav.classList.add("navbar", "navbar-expand-lg", "navbar-dark", "bg-dark");
nav.innerHTML = `
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">Rick & morty</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                </ul>
                    
                <form id="formData" class="d-flex ">
                    <input class="form-control me-2" type="search" placeholder="Busca un personaje" aria-label="Search" id="name">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
`;
body === null || body === void 0 ? void 0 : body.insertAdjacentElement("beforebegin", nav);
