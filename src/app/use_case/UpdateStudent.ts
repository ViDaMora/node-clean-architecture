'use strict'

import {StudentRepository} from '../../domain/Student/StudentRepository'
import {Student} from '../../domain/Student/Student'


export = (id:string, name:string, age:number, genre:string,studentRepository:StudentRepository)=>{
    return studentRepository.update(id, new Student(id,name, age, genre))
}