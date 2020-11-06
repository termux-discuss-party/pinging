const axios = require("axios")
const urls = ["https://glitch.com/edit/#!/main-proje?path=server.js%3A29%3A0"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);
