//Styles import
import css from "./styles/style.css";

//JS imports
import Cookie from "./scripts/Cookie.js";

//Variables related with DOM
const modal = document.querySelector("#modal");
const btnAccept = document.querySelector("#btnAccept");

//Classes
const cookie = new Cookie(modal, btnAccept);