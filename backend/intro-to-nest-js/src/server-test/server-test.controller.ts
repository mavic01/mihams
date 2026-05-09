import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ServerTestService } from './server-test.service';
import { TaskNameDTO } from './dto/taskName.dto';

@Controller('server-test')
export class ServerTestController {
  constructor(
    private readonly serverTestService: ServerTestService
  ) {}


  @Get()
  public getAllTask() {
    return this.serverTestService.getTasks()
  }

  @Post()
  createTassks(@Body() taskName: TaskNameDTO) {
    return this.serverTestService.createTasks(taskName)
  }

  @Delete()
  deleteTask(@Body() taskName: string) {
    return this.serverTestService.deleteTask(taskName)
  }
}
