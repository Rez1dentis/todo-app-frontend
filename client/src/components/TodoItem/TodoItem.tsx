import { Checkbox, Fab, IconButton, ListItemButton, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import EditIcon from '@mui/icons-material/Edit';
import type { Task } from '../../types/Task';

export const TodoItem = ({
  id,
  text,
  priority,
  isCompleted,
  deleteHandler,
}: Task & { deleteHandler: (id: string) => void }): JSX.Element => {
  return (
    <ListItem>
      <ListItemButton>
        <Checkbox checked={isCompleted} />
        <ListItemText primary={text} />
        <IconButton onClick={() => deleteHandler(id)} aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <Fab size="small" color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
      </ListItemButton>
    </ListItem>
  );
};
