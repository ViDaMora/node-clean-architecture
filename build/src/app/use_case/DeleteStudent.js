'use strict';
module.exports = function (studentId, studentRepository) {
    if (!studentId) {
        throw new Error('Student ID is required');
    }
    return studentRepository.remove(studentId);
};
