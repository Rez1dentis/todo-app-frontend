import type { Task } from '../../../types/Task';
import { Addtodo } from '../../AddTodo/Addtodo';
import { TodoItem } from '../../TodoItem/TodoItem';
import { useState } from 'react';
import Box from '@mui/material/Box';

// const useStyles = createUseStyles({
//   container: {
    
//   }
// })

export const TodoMain = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const deleteHandler = (id: string) => {
    setTasks(tasks.filter((el) => el.id !== id));
  };

  return (
    <div>
      <Box sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
        <Addtodo setTasks={setTasks} />
        {tasks.map((el) => (
          <TodoItem key={el.id} {...el} deleteHandler={deleteHandler} />
        ))}
      </Box>
    </div>
  );
};
