import mongoose from 'mongoose';

// Connect to database
// mongoose.connect('mongodb://test:PAULot2000.@ds121495.mlab.com:21495/users-todo');

// Create a blueprint
const todoSchema = new mongoose.Schema({
  item: String,
});
// Create a model
const Todo = mongoose.model('Todo', todoSchema);

const data = [
  { item: 'get milk' },
  { item: 'kick some coding ass' },
  { item: 'play football' },
];

export default (app) => {
  app.get('/todo', (req, res) => {
    // Todo.find({}, (err, data) => {
    //   if (err) throw err;
    // });
    res.render('todo', { todos: data });
  });

  app.post('/todo', (req, res) => {
    Todo(req.body).save((err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });

  app.delete('/todo/:item', (req, res) => {
    Todo.find({ item: req.params.item.replace(/\-/g, ' ') }).deleteOne((err, data) => {
      res.json(data);
    });
  });
};
