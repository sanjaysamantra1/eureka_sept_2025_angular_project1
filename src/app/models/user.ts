export class User { // User Model
  id: number;
  firstName: string;
  lastName: string;
  salary: number;
  gender: string;
  email: string;
  constructor(id: number, firstName: string, lastName: string, salary: number, gender: string, email: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    this.gender = gender;
    this.email = email;
  }
  getFullName(): string {
    return `${this.lastName} ${this.firstName} `;
  }
  getYearlySalary(): number {
    return 12 * this.salary;
  }
}
