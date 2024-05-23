import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:number;
   employee : Employee = new Employee();

  constructor(private employeeService : EmployeeService, 
    private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee = data;

    });
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
        console.log(data);
        this.goToEmployeeList();
    }, error => console.log(error));
  }

  goToEmployeeList(){
    this.route.navigate(['/employees']);
  }

}
