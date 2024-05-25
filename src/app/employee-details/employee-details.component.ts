import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  employee : Employee;

  constructor(private activateRoute: ActivatedRoute,
     private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      console.log(data);
      this.employee = data;
    })
  }

}
