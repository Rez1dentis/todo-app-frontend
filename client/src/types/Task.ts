export interface Task {
  id: string;
  text: string;
  priority: 'red' | 'yellow' | 'blue';
  isCompleted: boolean;
}
