import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataModel } from '../common/data.model';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  header: string = "Add PII Data to MSSQL";
  dataModel: DataModel;
  saveError?: String;
  hasError: boolean = false;

  constructor(private service: DataServiceService,
    private router: Router) { 
    this.dataModel = new DataModel();
    // this.service.
  }

  ngOnInit(): void {
  }

  saveData(data:any){
    console.log(data);
    this.submit(data);
  }

  submit(data: any){
    console.log('Data submitted');
    console.warn(data)
    this.service.submitData(data).subscribe((response)=>{
      console.warn(response);
      this.router.navigate(['list']);
    },(httpErrorResponse: HttpErrorResponse) => {
      console.log(httpErrorResponse.error);
      this.hasError = true;
      this.saveError = httpErrorResponse.error;
    });
  }

}
