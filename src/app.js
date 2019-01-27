import express from 'express';
import bodyParser from 'body-parser';
import log from 'fancy-log';
import path from 'path';

import todoController from './controllers/todoController';

const app = express();

const PORT = process.env.PORT || 4040;

const viewsFolder = path.format({
  dir: 'C:\\Users\\Paul Taiwo\\Documents\\web files\\todo-app\\src\\views',

});

log.info();

app.set('views', viewsFolder);
app.set('view engine', 'ejs');

app.use(express.static(path.format({
  dir: 'C:\\Users\\Paul Taiwo\\Documents\\web files\\todo-app\\src\\public',
})));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

todoController(app);

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(PORT, () => { log.info('Yo, Listening ', PORT); });

export default app;
