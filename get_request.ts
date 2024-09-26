interface tagInterface {
  "id": number,
  "name": string
}

interface petInteface {
  "id": number,
  "name": string,
  "category": {
    "id": number,
    "name": string,
  },
  "photoUrls": string[],
  "tags": tagInterface[],
  "status": string,
}

const getPendingPets = async (): Promise<petInteface[]> => {
  return await fetch('https://petstore3.swagger.io/api/v3/pet/findByStatus?status=pending')
    .then(res => res.json())
    .then(res => {
      return res as petInteface[];
    })
}


getPendingPets().then(res => console.log(res))
