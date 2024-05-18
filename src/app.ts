import express from 'express';
import "reflect-metadata";

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from my route!');
});

app.get('/users', (req, res) => {
  res.json(["user1", "user2", "user3"]);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running')
});
