import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenizedDataModel } from '../common/tokenized-data.model';
import { VaultModel } from '../common/vault.model';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-vault-operation',
  templateUrl: './vault-operation.component.html',
  styleUrls: ['./vault-operation.component.css']
})
export class VaultOperationComponent implements OnInit {

  public sqlData: any = [];
  public tableDisplaySource: any = [];
  public tokenisedData: any = [];

  connectionModel: VaultModel;

  constructor(private service: DataServiceService,
    private router: Router) {
      this.connectionModel = new VaultModel();
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

      this.service.tokenizedData(new TokenizedDataModel()).subscribe(
        (response: any) => {
          this.tableDisplaySource = response.real_data;
          this.tokenisedData = response.tokenized_data;
          console.log(response);
          
        });
  }

  getDataFromVault(connectionModel: VaultModel) {
    this.getDetokanisedData(connectionModel);
    this.getTokanisedData(connectionModel);
  }

  getDetokanisedData(connectionModel: VaultModel) {
    console.log('getDetokanisedData');
    this.service.getDetokenisedData(connectionModel).subscribe((response)=>{
      console.warn(response);
      this.tableDisplaySource = response;
    },(httpErrorResponse: HttpErrorResponse) => {
      console.log(httpErrorResponse.error);
    });
  }

  getTokanisedData(connectionModel: VaultModel) {
    console.log('getTokanisedData');
    this.service.getTokenisedData(connectionModel).subscribe((response: any)=>{
      console.warn(response);
      this.tokenisedData = response;
    },(httpErrorResponse: HttpErrorResponse) => {
      console.log(httpErrorResponse.error);
    });
  }

  deleteData(row: any) {
    console.log(row);
    let id = row.id;
    this.tableDisplaySource.forEach((obj: any) => {
      Object.entries(obj).forEach(([key, value]) => {
        console.log(`${key} ${value}`);
      });
      console.log('-------------------');
    });

    console.log('-------- tokenisedData-----------');
    let index = -1;
    let tokenToDelete: any;
    this.tokenisedData.forEach((obj: any) => {
      index++;
      // Object.entries(obj.data).forEach(([key, value]) => {
        Object.entries(obj).forEach(([key, value]) => {
        
        // if (key === "fname" || key === "name")  {          
        //   tokenToDelete = value;          
        // }

        if (key === "id" && value === id)
        {          
          tokenToDelete = value;
          this.deleteNameToken(tokenToDelete);
          this.tokenisedData.splice(index, 1);          
        }
        console.log(`${key} ${value}`);
      });
      console.log('-------------------');
    });
  }

  deleteNameToken(token: any) {
    this.service.deleteToken(token).subscribe(
      (response: any) => {
        console.log(response);
      },
      (httpErrorResponse: HttpErrorResponse) => {
        let errorMsg = httpErrorResponse.message;
          // errorMsg = 'DataNotFound';
          console.error(errorMsg);
      }
    );
  }
}
