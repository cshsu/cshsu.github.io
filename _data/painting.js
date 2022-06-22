const fetch = require("node-fetch");

module.exports = async function() {
    console.log( "Fetching Painting Cloudinary Data…" );

  // Cloudinary API
    return fetch("https://res.cloudinary.com/joshcrain/image/list/painting.json")
        .then(res => res.json()) // node-fetch option to transform to json
        .then(json => {
        // return the data
        return {
            cloudinary: json
        };
    });
};