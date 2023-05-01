import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { ApiClienteService } from 'src/app/services/api-cliente.service';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit { 
  listCliente:Cliente[]=[];
  listaCliente: any;
  listaClientes: any;
  constructor(private api:ApiClienteService){}
  ngOnInit(): void{
    
  }
  getTodos(): void{
    this.api.traerTodos().subscribe(res=>{
     console.log('>>>>>>>>>>>', res);
     this.listaClientes=res.data;

     
    });

  }

}
