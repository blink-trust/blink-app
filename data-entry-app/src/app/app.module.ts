import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddDataComponent } from './add-data/add-data.component';
import { HttpClientModule } from '@angular/common/http';
import { VaultDataComponent } from './vault-data/vault-data.component';
import { ListDataFromDbComponent } from './list-data-from-db/list-data-from-db.component';
import { } from '@angular/material';
import { VaultOperationComponent } from './vault-operation/vault-operation.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDataComponent,
    VaultDataComponent,
    ListDataFromDbComponent,
    VaultOperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
