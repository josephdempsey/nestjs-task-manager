import * as z from 'zod';
import { TaskStatus } from '../task-status.enum';

// export class UpdateTaskDto {
//   @IsNotEmpty()
//   @IsEnum(TaskStatus)
//   status: TaskStatus;
// }

export const UpdateTaskSchema = z.object({
  status: z.nativeEnum(TaskStatus),
});
