import{Controller,Get, Post,Put} from"@nestjs/common"
@Controller('teachers/:teacherId/students')
export class StudentTeacherController{
   
@Get('/')
getStudents(){
    return "get students that belongs to teacher"
}

@Put('/:studentId')
updateTeacher(){
    return "update student of a teacher"
}
}