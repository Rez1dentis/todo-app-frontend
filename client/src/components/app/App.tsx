import { JssProvider } from '../../styles';
import { TodoMain } from '../pages/TodoMain/TodoMain';

export const App = () => {
  return (
    <JssProvider>
      <TodoMain />
    </JssProvider>
  );
};
