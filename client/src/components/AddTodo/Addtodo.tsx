import { Fab, ListItemText, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';

interface Task {
  id: string;
  text: string;
  priority: 'red' | 'yellow' | 'blue';
  isCompleted: boolean;
}

export const Addtodo = (): JSX.Element => {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTaskHandler = () => {
    setTasks([
      ...tasks,
      { id: Date.now().toString(), text: taskText, priority: 'red', isCompleted: false },
    ]);
    setTaskText('');
  };

  const deleteHandler = (id: string) => {
    setTasks(tasks.filter((el) => el.id !== id));
  };

  return (
    <div>
      <ListItemText>Добавить задачу</ListItemText>
      <TextField value={taskText} onChange={(e) => setTaskText(e.target.value)}></TextField>
      <Fab onClick={addTaskHandler} size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      {tasks.map((el) => (
        <TodoItem key={el.id} {...el} deleteHandler={deleteHandler} />
      ))}
    </div>
  );
};
