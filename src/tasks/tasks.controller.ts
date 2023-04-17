import { Body, Controller, Delete, Get, Post, Param, Req, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
     constructor (private taskService: TasksService) { }

     @Get()
     getTasks(){
        return this.taskService.getAllTasks();
     }

    @Post()
    createTask(@Body() taskDto: TaskDto){
        console.log("Almacenando tarea");
        
        return this.taskService.post(taskDto);
    }

    @Put('/:id')
    updateTask(@Param() id: number, @Body() upDateTaskDto: TaskDto){
        return this.taskService.put(upDateTaskDto, id);
    }

    @Delete('/:id')
    deleteTask(@Param() param: number){
        return this.taskService.delete(param);
    }
    
}
