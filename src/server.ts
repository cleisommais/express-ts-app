import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from my route!');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running')
});
