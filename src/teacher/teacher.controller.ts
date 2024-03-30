import{Controller,Get, Post,Put} from"@nestjs/common"
@Controller('teachers')
export class TeacherController{
    @Get()
getTeacher(){
    return "all teacher"
}
@Get('/:teacherId')
getTeacherById(){
    return "get teacher"
}


}