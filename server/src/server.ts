import express from 'express';

const app = express();

app.get('/games', (request, response) => {
  return response.json([])
})

app.post('/ads', (request, response) => {
  return response.status(201).json([])
})

app.get('/ads', (request, response) => {
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
