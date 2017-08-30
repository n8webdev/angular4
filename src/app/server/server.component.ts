import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverID = 10;
  serverStatus: string;

  constructor() { }

  ngOnInit() {
    Math.random() > 0.5 ? this.serverStatus = 'online' : this.serverStatus = 'offline';
  }

  getStatus(): string {
    return this.serverStatus;
  }

  getColor(): string {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
