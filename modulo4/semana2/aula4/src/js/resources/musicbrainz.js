import axios from 'axios';

function musicbrainz_artists_search(query) {
    return new Promise(function (resolve, reject) {
    axios.get(`http://musicbrainz.org/ws/2/artist/?query=${query}&fmt=json`)
        .then(function (response) {
            resolve(response);
        })
        .catch(function (error) {
            reject('error', error);
        });
    })
}

export default musicbrainz_artists_search;