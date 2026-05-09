import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { TaskNameDTO } from './dto/taskName.dto';

@Injectable()
export class ServerTestService {
    private tasks;

    getTasks() {
        return this.tasks
    }

    createTasks(taskName: TaskNameDTO) {
        if (!taskName) {
            throw new BadRequestException('Task name needs to be added')
        }

        if (this.tasks.includes(taskName)) {
            throw new ConflictException('task already exixt')
        }

        this.tasks.push(taskName)

        return JSON.stringify({
        success: true,
        tasks: this.tasks
      })
    }

    deleteTask(taskName: string){
        if (!this.tasks.includes(taskName)) {
            throw new BadRequestException('task does not exist')
        }

        this.tasks = this.tasks.filter(task => task !== taskName);
    }
}
