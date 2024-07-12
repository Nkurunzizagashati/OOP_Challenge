const UniversityResidenceSystem = require("./UniversityResidenceSystem");
const DormRoom = require("./DormRoom");
const Apartment = require("./Apartment");
const Student = require("./Student");
const MaintenanceRequest = require("./MaintenanceRequest");

const system = new UniversityResidenceSystem();

// Adding dorm rooms
const dorm1 = new DormRoom("Dorm A", "123 Dorm St", 300, false);
const dorm2 = new DormRoom("Dorm B", "124 Dorm St", 350, true);
system.addDormRoom(dorm1);
system.addDormRoom(dorm2);

// Adding apartments
const apt1 = new Apartment("Apartment A", "125 Apartment St", 3, true);
const apt2 = new Apartment("Apartment B", "126 Apartment St", 2, false);
system.addApartment(apt1);
system.addApartment(apt2);

// Adding students
const student1 = new Student("John Doe", "S12345", "Male", dorm1);
const student2 = new Student("Jane Smith", "S67890", "Female", apt1);
system.addStudent(student1);
system.addStudent(student2);

// Adding maintenance requests
const request1 = new MaintenanceRequest(
  "Fix the heater",
  "submitted",
  student1,
  "Employee A"
);
const request2 = new MaintenanceRequest(
  "Leak in the roof",
  "in progress",
  student2,
  "Employee B"
);
system.addMaintenanceRequest(request1);
system.addMaintenanceRequest(request2);

// List all dorm rooms
console.log("Dorm Rooms:", system.listDormRooms());

// List all apartments
console.log("Apartments:", system.listApartments());

// Find student by ID
console.log("Find Student S12345:", system.findStudentById("S12345"));

// List maintenance requests for a student
console.log(
  "Maintenance Requests for S12345:",
  system.listMaintenanceRequestsForStudent("S12345")
);
