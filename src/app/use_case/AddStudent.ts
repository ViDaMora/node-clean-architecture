'use strict'

import {StudentRepository} from '../../domain/Student/StudentRepository'
import {StudentInterface} from '../../domain/Student/StudentInterface'
import {Student} from '../../domain/Student/Student'


export = ( name:string, age:number, genre:string,studentRepository:StudentRepository) => {
    const student: StudentInterface = {name, age, genre};
    return studentRepository.save(student)
}