import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from 'src/app/models/client';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-admin-clientes',
  templateUrl: './admin-clientes.component.html',
  styleUrls: ['./admin-clientes.component.css']
})
export class AdminClientesComponent implements OnInit {

  
  clientList:Array<Client>=[];

  closeResult: string='';
  modalOptions:NgbModalOptions;

  createFormGroup = this.fb.group({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required)
  });
  
  constructor(private clientService: ClientService, private modalService: NgbModal, private fb: FormBuilder) {
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
   }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(){
    this.clientService.getClients().subscribe(res=>{
      console.log(res);
      this.clientList=res;
    });
  }

  open(content:any) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  createClient(){
    console.log('Creating client...');
    let clientTmp: Client = new Client(this.createFormGroup.get('name')?.value,this.createFormGroup.get('phone')?.value,this.createFormGroup.get('email')?.value,this.createFormGroup.get('startDate')?.value,this.createFormGroup.get('endDate')?.value);
    this.clientService.createClient(clientTmp).subscribe(res=>{
      if(res!=null && res!=undefined){
        this.clientList.push(res);
      }
    })
  }

}
