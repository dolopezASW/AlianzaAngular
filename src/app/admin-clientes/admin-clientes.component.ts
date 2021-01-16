import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from 'src/app/models/client';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-clientes',
  templateUrl: './admin-clientes.component.html',
  styleUrls: ['./admin-clientes.component.css']
})
export class AdminClientesComponent implements OnInit {

  
  clientList:Array<Client>=[];
  
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(){
    this.clientService.getClients().subscribe(res=>{
      console.log(res);
      this.clientList=res;
    });
  }

  open() {
    
  }

}
