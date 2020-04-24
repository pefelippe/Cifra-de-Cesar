const axios = require ("axios");
const config = require("./answer.json")
const url = `https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${config.token}`

/* BUSCAR A MENSAGEM ENCRIPTOGRAFADA*/
axios
    .get(url)
    .then(response => console.log(response.data.cifrado))
    .catch(error => console.log(error))

/* AGORA TEMOS QUE DESCRIPTOGRAFAR A MENSAGEM 
 - Usei o site: https://www.dcode.fr/caesar-cipher
 - Resultado: rfc npmzjck ugrf rpmszjcqfmmrgle gq rfyr rpmszjc qfmmrq zyai. slilmul ysrfmp */