import * as z from 'zod';
import { TaskStatus } from '../task-status.enum';

// export class UpdateTaskDto {
//   @IsNotEmpty()
//   @IsEnum(TaskStatus)
//   status: TaskStatus;
// }

// Create a request schema using `zod` and automatically derive the type from it \o/
export const UpdateTaskSchema = z.object({
  status: z.nativeEnum(TaskStatus),
});
