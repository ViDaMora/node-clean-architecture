'use strict'
import {StudentRepository} from '../../domain/Student/StudentRepository'


export = (studentId: string, studentRepository:StudentRepository)=>{
    return studentRepository.get(studentId)
}