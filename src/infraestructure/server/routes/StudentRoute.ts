'use strict';

import createStudent from '../../controllers/StudentController'
import express from 'express'

const router = express.Router()

router.post('/', createStudent)


export  {router}