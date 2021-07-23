'use strict';
var Student_1 = require("../../domain/Student/Student");
module.exports = function (id, name, age, genre, studentRepository) {
    return studentRepository.update(id, new Student_1.Student(id, name, age, genre));
};
