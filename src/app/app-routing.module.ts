import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListClienteComponent } from './cliente/lista-Clientes/list-cliente.component';
import { AddClientesComponent } from './cliente/add-clientes/add-clientes.component';

const appRoutes:Routes=[
  {path:"lista-cliente",component: ListClienteComponent},
  {path:"crear-cliente",component : AddClientesComponent}
]

@NgModule({ 
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  

 exports:[RouterModule]

})
export class AppRoutingModule { }
