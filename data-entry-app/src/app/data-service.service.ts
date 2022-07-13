import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { DataModel } from './common/data.model';
import { TokenizedDataModel } from './common/tokenized-data.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private baseUrl = "http://localhost:9090";
  private blinkBaseUrl = "http://vaultapi-qa-lb-1233545551.ap-south-1.elb.amazonaws.com"
  private blinkDetokenizeUrl = "/api/v1/vault-service/vault/detokenize";
  private blinkTokenizedUrl = "/api/v1/vault-service/vault/data";
  private blinkDeleteToken = "/api/v1/vault-service/vault/delete/record/";
  private blinkTokenizeTable = "/api/v1/vault-service/vault/tokenize";

  constructor(private http: HttpClient) { }


  submitData(data: any) {
    return this.http.post(this.baseUrl + "/saveData", data);
  }

  getRecords() {
    return this.http.get(this.baseUrl + "/records");
  }

  getDetokenisedData(data: any) {
    return this.http.post(this.blinkBaseUrl + this.blinkDetokenizeUrl, data) as Observable<DataModel[]>;
  }

  getTokenisedData(data: any) {
    return this.http.post(this.blinkBaseUrl + this.blinkTokenizedUrl, data) as any;
  }

  deleteToken(token: any) {
    console.log('token to delete');
    return this.http.delete(this.blinkBaseUrl + this.blinkDeleteToken + token) as any;
  }

  tokenizedData(model: TokenizedDataModel) {
    return this.http.post(this.blinkBaseUrl + this.blinkTokenizeTable, model) as any;
  }

}
