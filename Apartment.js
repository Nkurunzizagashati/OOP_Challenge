/**
 * Represents an apartment.
 */
class Apartment {
  /**
   * Creates a new apartment.
   * @param {string} name - The name of the apartment.
   * @param {string} address - The address of the apartment.
   * @param {number} numberOfBedrooms - The number of bedrooms in the apartment.
   * @param {boolean} isOccupied - Whether the apartment is currently occupied.
   */
  constructor(name, address, numberOfBedrooms, isOccupied) {
    this.name = name;
    this.address = address;
    this.numberOfBedrooms = numberOfBedrooms;
    this.isOccupied = isOccupied;
  }
}

// Export the apartment class
module.exports = Apartment;
