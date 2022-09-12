import express from 'express';

const app = express();

app.get('/abs', () => {
  console.log('Acessou Abs')
})

app.listen(3333)


