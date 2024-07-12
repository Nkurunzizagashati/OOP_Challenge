/**
 * Represents a maintenance request.
 */
class MaintenanceRequest {
  /**
   * Creates a new maintenance request.
   * @param {string} description - The description of the maintenance request.
   * @param {string} status - The current status of the maintenance request (submitted, in progress, completed).
   * @param {Student} student - The student who submitted the maintenance request.
   * @param {string} [assignedEmployee] - The employee assigned to the maintenance request.
   */
  constructor(description, status, student, assignedEmployee) {
    this.description = description;
    this.status = status;
    this.student = student;
    this.assignedEmployee = assignedEmployee;
  }
}

module.exports = MaintenanceRequest;
