import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task  {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    tarea: string

    constructor(tarea: string){
        this.tarea = tarea
    }
}