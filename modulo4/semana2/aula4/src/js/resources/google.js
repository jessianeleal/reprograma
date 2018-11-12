import axios from 'axios';
import credentials from '../credentials';

function google_image_search(query) {
    return new Promise(function (resolve, reject) {
    axios.get(`https://www.googleapis.com/customsearch/v1?key=${credentials.google.key}&cx=${credentials.google.cx}&q=${query}&searchType=image&imgSize=huge`)
        .then(function (response) {
            resolve(response);
        })
        .catch(function (error) {
            reject('error', error);
        });
    })
}

export default google_image_search;