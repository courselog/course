import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IEmployee } from '../DM/employee';
import { calcFibonacci, fiboRe } from '../funcions/fibonacci';
import { randomInRange } from '../funcions/myMath';

@Component({
  selector: 'app-employees-component',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesComponent implements OnInit {
  ngOnInit(): void {
    for(let i =0; i<1000;i++){
      let name: string = this.names[i%3];
      let n : number = randomInRange(10,20);
      let fibo: number = fiboRe(n);
      // let fibo: number = calcFibonacci(n);
      let curr: IEmployee = {name: name, fiboNum: fibo};

      this.employees.push(curr);
    }
  }
  private names = ['Tomer', 'Dganit', 'Or'];
  public nameInput:string ='';

  employees: IEmployee[]= [];

  deleteEmp(index: number){
    if(index<this.employees.length && index>=0){
      // delete this.employees[index]
      this.employees.splice(index,1);
    }
  }

  addEmployee(){
    if(this.nameInput?.trim()!=''){
      //unshift add item in start
      //push add item in end
      this.employees.unshift(this.createEmployee(this.nameInput)); 
    }

    this.nameInput='';
  }

  private createEmployee(name:string): IEmployee{
      let n : number = randomInRange(10,20);
      let fibo: number = fiboRe(n);
      // let fibo: number = calcFibonacci(n);
      let res: IEmployee = {name: name, fiboNum: fibo};

      return res;
  }
}
