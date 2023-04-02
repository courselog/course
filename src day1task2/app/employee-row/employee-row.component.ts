import { Component, Input } from '@angular/core';
import { IEmployee } from '../DM/employee';

@Component({
  selector: 'app-employee-row',
  templateUrl: './employee-row.component.html',
  styleUrls: ['./employee-row.component.scss']
})
export class EmployeeRowComponent {
  @Input() employee: IEmployee | null = null;
}
