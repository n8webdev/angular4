import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  newServerName = 'Test';

  constructor() {
    setTimeout(() => this.allowNewServer = true, 5000);
   }

  ngOnInit() {
  }

  toggleServerStatus(): void {
    this.allowNewServer = !this.allowNewServer;
  }

  setNewServerName(event): void {
    this.newServerName = event.target.value;
  }

}
