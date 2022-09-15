import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  return response.json([
    { id: 1, name: 'A' },
    { id: 1, name: 'A' },
    { id: 1, name: 'A' },
    { id: 1, name: 'A' },
    { id: 1, name: 'A' },
    { id: 1, name: 'A' },
    { id: 1, name: 'A' },
    { id: 1, name: 'A' },
  ])
})

app.listen(3333)
