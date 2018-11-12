import '../styles/main.scss';

import credentials from './credentials';

import google_image_search from './resources/google'
import musicbrainz_artists_search from './resources/musicbrainz'
import Axios from 'axios';

// Manipulação do dom




const search = document.querySelector("form");
const input_search = document.getElementById("searchArtist");
const content = document.getElementById("content");
const image = document.querySelector("img");
const main = document.querySelector("main");
const input = document.querySelector("input");



search.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const input_value = input_search.value;
    google_image_search(input_value).then(function(data) {
        image.src = `${data.data.items[0].link}`;      
        console.log(data.data)
    });
    musicbrainz_artists_search(input_value).then(function(data) {
        console.log(data);
        let nome = data.data.artists[0].name;
        let data_inicial = data.data.artists[0]["life-span"].begin;
        let data_final = data.data.artists[0]["life-span"].end;
        let area = data.data.artists[0].area.name;
        
         if (data.data.artists[0]["life-span"].ended !== true) {
            data_final = "Present";
        }
        content.innerHTML = `<h1>${nome}</h1><h3>${data_inicial} - ${data_final}</h3><p>${area}</p>`;
    })
    main.style.width = "32vw";
    input.style.width = "300px";
}) 
 




