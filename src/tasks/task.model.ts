import { TaskStatus } from './task-status.enum';

// No longer needed as using Enitity
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
