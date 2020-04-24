import requests

urlPOST = 'https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=90f65362ac9fb6b4a8ae868f62a3b3dd634ed459';

# ENVIAR POST PARA O SERVIDOR
r = requests.post(urlPOST, 
files={"answer": open("answer.json", "rb")})

print(r.text)