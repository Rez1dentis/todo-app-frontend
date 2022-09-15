import express from 'express';
import Todo from '../client/src/components/Todo/Todo';

const PORT = 3005;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/add', async (req, res) => {
  const { task, status } = req.body;
  const newObj = await Todo.create({ task, status });
  res.json(newObj);
});

app.get('/get', async (req, res) => {
  const tasks = await Todo.findAll();
  console.log(tasks);
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log('server start on port ', PORT);
});
