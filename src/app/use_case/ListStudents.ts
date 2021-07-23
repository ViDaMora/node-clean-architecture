'use strict'

import {StudentRepository} from '../../domain/Student/StudentRepository'

export = ( studentRepository:StudentRepository) => {
    return studentRepository.findAll();
  };
  