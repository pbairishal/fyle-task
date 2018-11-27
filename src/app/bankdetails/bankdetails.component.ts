import { Component, OnInit } from '@angular/core';
import { APIService } from  '../api.service';
import { Bank } from '../bank';

@Component({
  selector: 'app-bankdetails',
  templateUrl: './bankdetails.component.html',
  styleUrls: ['./bankdetails.component.css']
})
export class BankdetailsComponent implements OnInit {

  banklist: Bank[];
  dataAPI: Bank[];
  defaultSelect:string = "MUMBAI";
  options = ["Mumbai","Bangalore","Pune","Delhi","Bhubaneswar"];

  constructor(private api:APIService) { }

  ngOnInit() {
    this.getDetails(this.defaultSelect);
  }

  getDetails(city){
    this.api.getBankDetails(city).subscribe((data: any) => {
      this.dataAPI = Object.create(data);
      this.banklist = Object.create(data);
    });
  }

  filterName(value) { 
    this.banklist = this.dataAPI.filter(item => 
      Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(value.toLowerCase()))
    );
  }

}
