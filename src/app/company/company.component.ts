import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor( private commonService: CommonServiceService) { }
  public response: any;
  ngOnInit(): void {
    this.commonService.companyDetails.subscribe(res=>{
      this.response = res.filter(element =>element.location ==='Delhi');

    })
  }

}
