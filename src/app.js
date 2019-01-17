import express from 'express';
import bodyParser from 'body-parser';

import todoController from './controllers/todoController';

const app = express();

const PORT = process.env.PORT || 4040;

app.set('views', `${__dirname}\\views`);
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}\\public`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

todoController(app);

console.log(`${__dirname}\\views`);

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(PORT, () => { console.log('Yo, Listening ', PORT); });

export default app;
