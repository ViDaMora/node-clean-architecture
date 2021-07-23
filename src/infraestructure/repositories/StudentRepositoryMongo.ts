'use strict';

import {Student} from '../../domain/Student/Student'
import {StudentSchema} from '../db/mongoose/schemas/UserSchema' 
import {StudentRepository} from '../../domain/Student/StudentRepository'
import {StudentInterface} from '../../domain/Student/StudentInterface'


export class StudentMongoRepository implements StudentRepository {
  
    async save(student:StudentInterface) : Promise<Student>{
        try{
            const nuevo = {name:student.name,age:student.age,genre:student.genre}
            const studentSchema = new StudentSchema(nuevo);
            const newStudent = await studentSchema.save();
            return new Student(newStudent.id,newStudent.name,newStudent.age,newStudent.genre);
        }catch(err){
            throw new Error(err);
        }
       
    }

    async findAll() : Promise<Array<Student>>{
        const students = await StudentSchema.find({});
        return students.map(student => new Student(student.id,student.name,student.age,student.genre));
    }

    async get(id:string) : Promise<Student>{
        const student = await StudentSchema.findOne({_id:id});
        if(student)
             return new Student(student.id,student.name,student.age,student.genre);
        throw new Error(`Student not found with id: ${id}`);
 }

    async remove(id:string) : Promise<Object>{
        return  await StudentSchema.deleteOne({_id:id});
    }

    async update(id:string,student:StudentInterface) : Promise<Student>{
            const updated = await StudentSchema.findOneAndUpdate({_id:id},{name:student.name,age:student.age,genre:student.genre});
            if (updated) {
                return new Student(updated.id,updated.name,updated.age,updated.genre);
            }
        
        throw new Error(`Student not found with id: ${id}`);
    }
        
        


}


