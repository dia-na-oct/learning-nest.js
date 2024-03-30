import { HttpException, Injectable } from "@nestjs/common";
import { Request,Response,NextFunction } from "express";
import { students } from "src/db";
@Injectable()
export class ValidStudentMiddleware{
    use(req:Request,res:Response,next:NextFunction){
       const studentId=req.params.studentId;
       const StudentsExists =students.some(student=> {
        return student.id===studentId
       });
       if(!StudentsExists){
        throw new HttpException("not found",400)
        next()
       }
    }
}