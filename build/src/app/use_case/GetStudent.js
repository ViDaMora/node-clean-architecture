'use strict';
module.exports = function (studentId, studentRepository) {
    return studentRepository.get(studentId);
};
