import { IsNotEmpty, IsString } from "class-validator";

export class TaskDto {
    @IsString()
    @IsNotEmpty()
    tarea: string;
}
