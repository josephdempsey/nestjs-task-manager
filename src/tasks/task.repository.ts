import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task.enitity';

@EntityRepository()
export class TaskRepository extends Repository<Task> {}
