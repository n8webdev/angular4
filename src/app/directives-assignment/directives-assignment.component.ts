import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-assignment',
  templateUrl: './directives-assignment.component.html',
  styleUrls: ['./directives-assignment.component.css']
})
export class DirectivesAssignmentComponent implements OnInit {

  displayMessage = true;
  logs = [];

  constructor() { }

  ngOnInit() {
  }

  onToggle(): void {
    this.logs.push(new Date());
    this.displayMessage = !this.displayMessage;
  }

}
