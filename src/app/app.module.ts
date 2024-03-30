import { Module } from '@nestjs/common';
import { StudentController } from 'src/student/student.controller';
import { StudentTeacherController } from 'src/teacher/student.controller';
import { TeacherController } from 'src/teacher/teacher.controller';
import { StudentService } from 'src/student/student.service';
import { StudentModule } from 'src/student/student.module';
@Module({
  imports: [StudentModule],
  controllers:[TeacherController,StudentTeacherController],
  providers:[]
})
export class AppModule {}
