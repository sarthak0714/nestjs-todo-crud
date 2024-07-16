import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';
import { AuthGuard } from '../auth/authjwt.guard';

@Controller('todo')
@UseGuards(AuthGuard)
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTodos(): Todo[] {
    return this.todoService.getTodos();
  }

  @Get(':id')
  getTodoById(@Param('id') id: number): Todo {
    return this.todoService.getTodoById(id);
  }

  @Get(':userId')
  getTodoByUserId(@Param('userId') userId: number): Todo {
    return this.todoService.getTodoByUserId(userId);
  }

  @Post()
  createTodo(@Body() todo: Todo) {
    return this.todoService.createTodo(todo);
  }

  @Put(':id')
  updateTodo(@Param('id') id: number, @Body() todo: Todo): string {
    return this.todoService.updateTodo(id, todo);
  }

  @Delete('id')
  deleteTodo(@Param('id') id: number): string {
    return this.todoService.deleteTodo(id);
  }
}
