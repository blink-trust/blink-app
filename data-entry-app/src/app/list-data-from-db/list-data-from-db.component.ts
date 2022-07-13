import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionModel } from '../common/connection.model';
import { DataModel } from '../common/data.model';
import { VaultModel } from '../common/vault.model';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-list-data-from-db',
  templateUrl: './list-data-from-db.component.html',
  styleUrls: ['./list-data-from-db.component.css']
})
export class ListDataFromDbComponent implements OnInit {

  @Input()
  public sqlData: any = [];

  constructor(private service: DataServiceService,
    private router: Router) {
      this.service.getRecords().subscribe(
        (dataModel: any) => {
          // this.isLoading = false;
          console.log(dataModel);
          this.sqlData = dataModel;
        },
        (httpErrorResponse: HttpErrorResponse) => {
          console.warn(httpErrorResponse);
        });
     }

  ngOnInit(): void {
    console.log('List data');
    this.service.getRecords().subscribe(
      (dataModel: any) => {
        // this.isLoading = false;
        console.log(dataModel);
        this.sqlData = dataModel;
      },
      (httpErrorResponse: HttpErrorResponse) => {
        console.warn(httpErrorResponse);
      });
  }

}
