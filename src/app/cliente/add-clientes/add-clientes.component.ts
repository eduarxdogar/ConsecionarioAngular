
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';



@Component({
  selector: 'app-add-clientes',
  templateUrl: './add-clientes.component.html',
  styleUrls: ['./add-clientes.component.css']
})
export class AddClientesComponent implements OnInit {
  
  listCliente:Cliente[]=[];
  constructor(){}
  ngOnInit(): void {
  }

  }


