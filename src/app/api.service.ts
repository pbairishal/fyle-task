import { Injectable } from  '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
providedIn:  'root'
})

export  class  APIService {
	API_URL  =  'https://vast-shore-74260.herokuapp.com/banks?city=';

	constructor(private  httpClient:  HttpClient) {}

	getBankDetails(CITY){
	    return  this.httpClient.get(`${this.API_URL}${CITY}`);
	}

}