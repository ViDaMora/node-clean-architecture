'use strict'
import {Student} from "./Student"
import {StudentInterface} from './StudentInterface'

export interface StudentRepository {
    findAll(): Promise<Array<Student>>;
    get(id: string): Promise<Student>;
    save(student:StudentInterface): Promise<Student>;
    update(id: string,student: Student): Promise<Student>;
    remove(id: string): Promise<Object>;
}

