import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminClientesComponent } from 'src/app/admin-clientes/admin-clientes.component';

const routes: Routes = [
  { path: 'admin-clientes', component: AdminClientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
