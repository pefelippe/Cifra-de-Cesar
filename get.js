const axios = require ("axios");
const config = require("./answer.json")
const url = `https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${config.token}`

/* BUSCAR A MENSAGEM ENCRIPTOGRAFADA*/
axios
    .get(url)
    .then(response => console.log(response.data.cifrado))
    .catch(error => console.log(error))
