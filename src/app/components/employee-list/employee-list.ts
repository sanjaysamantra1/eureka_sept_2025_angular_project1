import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {
  employees: any = [];

  constructor(private empService: EmployeeService) {
  }
  ngOnInit() {
    this.empService.employeeObs.subscribe((data: any) => this.employees = data);
  }
}
