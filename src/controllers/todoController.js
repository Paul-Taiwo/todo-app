export default (app) => {
  app.get('/todo', (req, res) => {
    res.render('todo');
  });
};
