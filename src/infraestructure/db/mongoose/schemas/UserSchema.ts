'use strict'
import { Schema, model} from 'mongoose';
import {StudentInterface} from '../../../../domain/Student/StudentInterface'


const schema= new Schema<StudentInterface>({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
});

const StudentSchema = model<StudentInterface>('Student', schema);

export {StudentSchema};
