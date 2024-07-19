const express = require('express');
const app = express();
app.use(express.json())


app.set('port', process.env.PORT || 3000);
app.locals.title = 'Pet Box';

const generateId = () => Date.now().toString()

app.locals.pets = [
  { id: generateId(), name: 'Jessica', type: 'dog' },
  { id: generateId(), name: 'Marcus Aurelius', type: 'parakeet' },
  { id: generateId(), name: 'Craisins', type: 'cat' },
  { id: generateId(), name: 'Buddy', type: 'dog' },
  { id: generateId(), name: 'Simba', type: 'cat' },
  { id: generateId(), name: 'Charlie', type: 'dog' },
  { id: generateId(), name: 'Max', type: 'cat' },
  { id: generateId(), name: 'Bella', type: 'dog' },
  { id: generateId(), name: 'Luna', type: 'cat' },
  { id: generateId(), name: 'Lucy', type: 'dog' },
  { id: generateId(), name: 'Rocky', type: 'dog' },
  { id: generateId(), name: 'Oliver', type: 'cat' },
  { id: generateId(), name: 'Milo', type: 'cat' },
  { id: generateId(), name: 'Leo', type: 'cat' },
  { id: generateId(), name: 'Toby', type: 'dog' },
  { id: generateId(), name: 'Daisy', type: 'dog' },
  { id: generateId(), name: 'Bailey', type: 'dog' },
  { id: generateId(), name: 'Sadie', type: 'dog' },
  { id: generateId(), name: 'Sophie', type: 'cat' },
  { id: generateId(), name: 'Chloe', type: 'cat' },
  { id: generateId(), name: 'Jack', type: 'dog' },
  { id: generateId(), name: 'Coco', type: 'cat' },
  { id: generateId(), name: 'Lily', type: 'cat' },
  { id: generateId(), name: 'Maggie', type: 'dog' },
  { id: generateId(), name: 'Nala', type: 'cat' },
  { id: generateId(), name: 'Zoe', type: 'cat' },
  { id: generateId(), name: 'Stella', type: 'dog' },
  { id: generateId(), name: 'Riley', type: 'dog' },
  { id: generateId(), name: 'Tucker', type: 'dog' },
  { id: generateId(), name: 'Ruby', type: 'cat' },
  { id: generateId(), name: 'Scout', type: 'dog' },
];

app.get('/', (request, response) => {
    console.log(request, 'request <<')
  response.send('Oh hey Pet Box');
});

app.get('/api/v1/pets', (request, response)=> {
    console.log(app.locals.pets)
    response.send(app.locals.pets)
})

app.get('/api/v1/pets/:id', (request, response)=> {

    // console.log(request.params, '<<< request params')
    const pet = app.locals.pets.find((pet) => pet.id === request.params.id)

    if(!pet){
        return response.status(404).send({message: 'pet does not exist'})
    }
    response.json(pet)
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});


app.post('/api/v1/pets', (request, response) => {
    // console.log(request, 'request for post')
    const id = generateId()
    const newPet = { id, name, type };
    app.locals.pets.push(newPet);
  
    res.status(201).json(newPet);

    })

app.put('/api/v1/pets/:id', (req, res) => {
  const { name, type } = req.body;
  const pet = app.locals.pets.find((pet) => pet.id === req.params.id);
  if (!pet) {
    return res.status(404).send({ message: 'Pet not found' });
  }
  pet.name = name;
  pet.type = type;
  res.json(pet);
});
    
app.delete('/api/v1/pets/:id', (req, res) => {
  const index = app.locals.pets.findIndex(pet => pet.id === req.params.id);
  if (index === -1) {
    return res.status(404).send({ message: 'Pet not found' });
  }
  app.locals.pets.splice(index, 1);
  res.status(204).send();
});
