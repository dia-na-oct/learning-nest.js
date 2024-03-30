import{Controller,Get, Post,Put,Param,Body} from"@nestjs/common"
import {CreateStudentDto,FindStudentResponseDto} from "./dto/student.dto"
import { StudentService } from "./student.service"
@Controller('student')
export class StudentController{
    constructor(private studentService:StudentService){}  // private
    @Get()
getStudent():FindStudentResponseDto[] {
    return this.studentService.getStudents()
}

@Get('/:studentId')
getStudentById(@Param('studentId') studentId:string){
    return "get student by id"+studentId
} 

@Post() 
createStudent(@Body() body:CreateStudentDto){
    console.log(body)
    return `create student with data ${JSON.stringify(body)}` 
}


@Put('/:studentId')
updateStudent(@Param('studentId') studentId:string,@Body() body){
    return "update student"
}
}