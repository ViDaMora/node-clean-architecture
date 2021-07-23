'use strict'
import {StudentRepository} from '../../domain/Student/StudentRepository'

export = (studentId: string,studentRepository:StudentRepository) => {
    if(!studentId){
        throw new Error('Student ID is required');
    }
    return studentRepository.remove(studentId)
}