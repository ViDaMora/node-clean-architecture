'use strict';
module.exports = function (name, age, genre, studentRepository) {
    var student = { name: name, age: age, genre: genre };
    return studentRepository.save(student);
};
