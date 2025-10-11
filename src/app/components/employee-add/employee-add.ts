import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';

@Component({
  selector: 'app-employee-add',
  imports: [],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css'
})
export class EmployeeAdd {

  constructor(private empService: EmployeeService) {
  }

  addEmployee(name: string, salary: string) {
    this.empService.addEmp({ name: name, sal: Number(salary) });
  }
}
