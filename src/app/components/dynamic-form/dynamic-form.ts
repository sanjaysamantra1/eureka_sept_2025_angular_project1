import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.css'
})
export class DynamicForm {
  empForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.empForm = this.fb.group({
      employees: this.fb.array([])
    });
  }

  getAllEmployees(): FormArray {
    return this.empForm.get('employees') as FormArray;
  }

  createNewEmployee(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
      skills: this.fb.array([])
    });
  }

  addEmployee() {
    this.getAllEmployees().push(this.createNewEmployee());
  }

  removeEmployee(empIndex: number) {
    this.getAllEmployees().removeAt(empIndex);
  }

  employeeSkills(empIndex: number): FormArray {
    return this.getAllEmployees().at(empIndex).get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({ skill: '', exp: '' });
  }

  addEmployeeSkill(empIndex: number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }

  removeEmployeeSkill(empIndex: number, skillIndex: number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  onSubmit() {
    console.log(this.empForm.value);
  }
}
