import express from 'express';
import bodyParser from 'body-parser';

import todoController from './controllers/todoController';

const app = express();

const PORT = process.env.PORT || 4040;

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

todoController(app);

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(PORT, () => { console.log('Yo, Listening ', PORT); });

export default app;
