import { Body, Get, Injectable } from '@nestjs/common';
import {Task} from './entity/task.entity';
import { Repository, UpdateDateColumn } from 'typeorm';
import { TaskDto } from "./dto/task.dto";
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {


    constructor(
       @InjectRepository(Task)
        private taskRepository: Repository<Task>,
      ) {}

     getAllTasks(): Promise<Task[]>{
         return this.taskRepository.find();
     }

     post(taskDto: TaskDto){
         const task:Task = new Task(taskDto.tarea);
         return this.taskRepository.save(task) 
     }

     put(upDateTaskDto: TaskDto, id: number){
      return this.taskRepository.update(id, upDateTaskDto);
     }

     delete(id: number){
         return this.taskRepository.delete(id);
     }
    
}
