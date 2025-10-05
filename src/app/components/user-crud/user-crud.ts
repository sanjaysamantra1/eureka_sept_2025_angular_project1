import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-crud',
  imports: [
    FormsModule
  ],
  templateUrl: './user-crud.html',
  styleUrl: './user-crud.css'
})
export class UserCrud {
  isLoading: boolean = false;
  isEdit: boolean = false;
  api_url = 'http://localhost:3000/employees';
  employees: any = [];
  empObj = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "gender": "",
    "salary": null,
    "id": null
  }

  constructor(private httpClient: HttpClient) {

  }
  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.isLoading = true;
    this.httpClient.get(this.api_url).subscribe(
      (response) => {
        this.isLoading = false;
        this.employees = response;
      },
      (err) => {
        console.log(err)
      }
    )
  }

  deleteEmp(id: any) {
    this.httpClient.delete(`${this.api_url}/${id}`).subscribe(
      (response) => {
        alert(`Employee ${id} Deleted Successfully!!!`);
        this.fetchEmployees();
      },
      (err) => {
        console.log(err)
      }
    )
  }

  resetForm() {
    this.empObj = {
      "firstName": "",
      "lastName": "",
      "email": "",
      "gender": "",
      "salary": null,
      "id": null
    }
  }

  addNewEmp() {
    this.httpClient.post(this.api_url, this.empObj).subscribe(
      (response) => {
        alert(`Employee Added Successfully!!!`);
        this.fetchEmployees();
        this.resetForm()
      },
      (err) => {
        console.log(err)
      }
    )
  }
  editEmp(emp: any) {
    this.empObj = emp;
    this.isEdit = true;
  }

  saveEmpData() {
    this.httpClient.patch(`${this.api_url}/${this.empObj.id}`, this.empObj).subscribe(
      (response) => {
        alert(`Employee Updated Successfully!!!`);
        this.fetchEmployees();
        this.resetForm()
      },
      (err) => {
        console.log(err)
      }
    )
  }
}
