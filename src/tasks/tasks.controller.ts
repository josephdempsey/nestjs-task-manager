import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create.tasks.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskSchema } from './dto/update.tasks.dto.';
import { TasksService } from './tasks.service';
import * as z from 'zod';
import { CustomValidationPipe } from '../pipes/validation.pipe';
import { Task } from './entity';

type UpdateTaskDtoType = z.infer<typeof UpdateTaskSchema>;

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(
    @Query(ValidationPipe) filterDto: GetTasksFilterDto,
  ): Promise<Task[]> {
    return this.tasksService.getTasks(filterDto);
  }

  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.deleteTaskById(id);
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  updateTaskStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body(new CustomValidationPipe(UpdateTaskSchema))
    updateTaskDto: UpdateTaskDtoType,
  ): Promise<Task> {
    return this.tasksService.updateTaskStatus(id, updateTaskDto.status);
  }
}
