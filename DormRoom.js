/**
 * Represents a dorm room.
 */
class DormRoom {
  /**
   * Creates a new dorm room.
   * @param {string} name - The name of the dorm room.
   * @param {string} address - The address of the dorm room.
   * @param {number} size - The size of the dorm room in square footage.
   * @param {boolean} isOccupied - Whether the dorm room is currently occupied.
   */
  constructor(name, address, size, isOccupied) {
    this.name = name;
    this.address = address;
    this.size = size;
    this.isOccupied = isOccupied;
  }
}

module.exports = DormRoom;
