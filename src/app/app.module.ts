import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListClienteComponent } from './cliente/lista-Clientes/list-cliente.component';
import { AppRoutingModule } from './app-routing.module';
import { AddClientesComponent } from './cliente/add-clientes/add-clientes.component';
import { HeaderComponent } from './template/header/header.component';
import { MenuComponent } from './template/menu/menu.component';
import { ApiClienteService } from './services/api-cliente.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListClienteComponent,
    AddClientesComponent,
    HeaderComponent,
    MenuComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ApiClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
