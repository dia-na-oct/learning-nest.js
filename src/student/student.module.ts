import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { ValidStudentMiddleware } from 'src/common/middlware/validStudent.middleware';

@Module({
    imports: [],
    controllers: [StudentController],
    providers:[StudentService]
})
export class StudentModule{}
