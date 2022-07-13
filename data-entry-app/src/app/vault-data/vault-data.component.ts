import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VaultModel } from '../common/vault.model';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-vault-data',
  templateUrl: './vault-data.component.html',
  styleUrls: ['./vault-data.component.css']
})
export class VaultDataComponent implements OnInit {

  header: string = "Vault Data";

  dataSource: any = [];
  // dataSource: any = [
  //   { "id": 11, "dob": "1978-09-28", "cvv_no": "0" },
  //   { "id": 14, "dob": "1981-08-25", "cvv_no": "617" },
  //   { "id": 23, "dob": "09-12-1984", "cvv_no": "713" }
  // ];

  vaultModel: VaultModel;
  
  keys: any = [];
  data: any = [];;

  constructor(private service: DataServiceService,
    private router: Router) { 
    this.vaultModel = new VaultModel();
    this.getTableData();
  }

  ngOnInit(): void {    
  }

  getDetokanisedData(model: VaultModel) {
    console.log('in getDetokanisedData');
    console.log(model);
    this.service.getDetokenisedData(model).subscribe((response)=>{
      console.warn(response);
      this.dataSource = response;
    },(httpErrorResponse: HttpErrorResponse) => {
      console.log(httpErrorResponse.error);
    });
  }

  getTableData() {
    let columnCount = 0;
    this.dataSource.forEach((record: any) => {
      console.log(record);
      columnCount = columnCount > record.length ? columnCount : record.length;
    });

    console.log("column count = " + columnCount);
    this.dataSource.forEach((dataRow: any) => {
      console.log(dataRow);
        console.log("==============================");
        Object.entries(dataRow).forEach(
          ([key, value]) => console.log(key, value)
        );
    });
  }

}
