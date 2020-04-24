const config = require("./answer.json")
const sha1 = require('js-sha1');

/* GERAR O RESUMO_CRIPTOGRAFICO */
var resumo = sha1(config.decifrado)
console.log(resumo)