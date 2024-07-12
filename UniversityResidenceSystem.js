const DormRoom = require("./DormRoom");
const Apartment = require("./Apartment");
const Student = require("./Student");
const MaintenanceRequest = require("./MaintenanceRequest");

/**
 * University Residence Management System
 */
class UniversityResidenceSystem {
  constructor() {
    this.dormRooms = [];
    this.apartments = [];
    this.students = [];
    this.maintenanceRequests = [];
  }

  /**
   * Adds a dorm room to the system.
   * @param {DormRoom} dormRoom - The dorm room to add.
   */
  addDormRoom(dormRoom) {
    this.dormRooms.push(dormRoom);
  }

  /**
   * Adds an apartment to the system.
   * @param {Apartment} apartment - The apartment to add.
   */
  addApartment(apartment) {
    this.apartments.push(apartment);
  }

  /**
   * Adds a student to the system.
   * @param {Student} student - The student to add.
   */
  addStudent(student) {
    this.students.push(student);
  }

  /**
   * Adds a maintenance request to the system.
   * @param {MaintenanceRequest} maintenanceRequest - The maintenance request to add.
   */
  addMaintenanceRequest(maintenanceRequest) {
    this.maintenanceRequests.push(maintenanceRequest);
  }

  /**
   * Finds a student by their ID.
   * @param {string} studentId - The ID of the student to find.
   * @returns {Student|null} - The student if found, or null if not found.
   */
  findStudentById(studentId) {
    return (
      this.students.find((student) => student.studentId === studentId) || null
    );
  }

  /**
   * Lists all maintenance requests for a specific student.
   * @param {string} studentId - The ID of the student whose maintenance requests to list.
   * @returns {MaintenanceRequest[]} - The list of maintenance requests.
   */
  listMaintenanceRequestsForStudent(studentId) {
    return this.maintenanceRequests.filter(
      (request) => request.student.studentId === studentId
    );
  }

  /**
   * Lists all dorm rooms.
   * @returns {DormRoom[]} - The list of dorm rooms.
   */
  listDormRooms() {
    return this.dormRooms;
  }

  /**
   * Lists all apartments.
   * @returns {Apartment[]} - The list of apartments.
   */
  listApartments() {
    return this.apartments;
  }
}

module.exports = UniversityResidenceSystem;
