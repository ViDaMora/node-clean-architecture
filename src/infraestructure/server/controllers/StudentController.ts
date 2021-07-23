'use strict';

import express from 'express';

import AddStudent from '../../app/use_case/AddStudent'
import {StudentMongoRepository} from '../repositories/StudentRepositoryMongo'

async function createStudent(req: express.Request, res: express.Response){
    try {
        const {name,genre,age} = req.body;
        let student = await AddStudent(name,age,genre,StudentMongoRepository.prototype);
        res.json(student);
    } catch (error) {
        res.status(500).send(error);
        
    }

}


export default createStudent