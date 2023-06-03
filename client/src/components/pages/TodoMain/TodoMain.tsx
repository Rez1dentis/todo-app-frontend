import { Box } from '@mui/material';
import { TodoItem } from '../../TodoItem/TodoItem';
import { Addtodo } from '../../AddTodo/Addtodo';

export const TodoMain = () => {
  return (
    <div>
      <Box sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
        <Addtodo />
        <TodoItem />
      </Box>
    </div>
  );
};
