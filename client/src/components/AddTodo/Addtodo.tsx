import { Fab, ListItemText, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { Task } from '../../types/Task';

interface Props {
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

export const Addtodo = ({ setTasks }: Props): JSX.Element => {
  const [taskText, setTaskText] = useState('');

  const addTaskHandler = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now().toString(), text: taskText, priority: 'red', isCompleted: false },
    ]);
    setTaskText('');
  };

  return (
    <div>
      <ListItemText>Добавить задачу</ListItemText>
      <TextField value={taskText} onChange={(e: any) => setTaskText(e.target.value)}></TextField>
      <Fab onClick={addTaskHandler} size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
};
