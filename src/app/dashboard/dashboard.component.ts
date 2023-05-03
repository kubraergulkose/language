import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public name: string = 'Kübra ERGÜL KÖSE';
  public openProduction : number = 23;
  public matrixContainers: number = 102;
  public producingMachines: number = 42;
  public now: Date = new Date();

  constructor() {
    setInterval(() => {
      this.now = new Date();
    }, 1);
    console.log(this.now);
  }
 

}
