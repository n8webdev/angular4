import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  newServerName = 'Test';
  serverCreationStatus = 'No server was created.';
  username = '';
  serverCreated = false;
  servers = ['Alpha', 'Beta'];

  constructor() {
    setTimeout(() => this.allowNewServer = true, 5000);
   }

  ngOnInit() { }

  toggleServerStatus(): void {
    this.serverCreated = true;
    this.servers.push(this.newServerName);
    this.serverCreationStatus = `Server ${this.newServerName} was created.`;
  }

  setNewServerName(event): void {
    this.newServerName = event.target.value;
  }

}
