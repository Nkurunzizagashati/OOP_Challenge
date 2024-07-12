/**
 * Represents a student.
 */
class Student {
  /**
   * Creates a new student.
   * @param {string} name - The name of the student.
   * @param {string} studentId - The ID of the student.
   * @param {string} gender - The gender of the student.
   * @param {(DormRoom|Apartment)} residence - The residence assigned to the student.
   */
  constructor(name, studentId, gender, residence) {
    this.name = name;
    this.studentId = studentId;
    this.gender = gender;
    this.residence = residence;
  }
}

// Export the Student class

module.exports = Student;
