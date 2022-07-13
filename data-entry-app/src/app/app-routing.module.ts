import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './add-data/add-data.component';
import { ListDataFromDbComponent } from './list-data-from-db/list-data-from-db.component';
import { VaultDataComponent } from './vault-data/vault-data.component';
import { VaultOperationComponent } from './vault-operation/vault-operation.component';

const routes: Routes = [
  {path: 'add', component: AddDataComponent},
  {path: 'vault', component: VaultDataComponent},
  {path: 'list', component: ListDataFromDbComponent},
  {path: 'vaultoperation', component: VaultOperationComponent},
  {path: '', redirectTo: '/add', pathMatch: 'full'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
