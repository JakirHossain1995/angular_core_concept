import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  companyDetails = of([{
    companyName: 'ABC',
    location: 'Kolkata',
    id: 123
  },
  {
    companyName: 'DEF',
    location: 'Delhi',
    id: 235
  },
  {
    companyName: 'GHI',
    location: 'Mumbai',
    id: 123
  },
  {
    companyName: 'JKL',
    location: 'Pune',
    id: 654
  },
  {
    companyName: 'CSG',
    location: 'Delhi',
    id: 895
  }]);
  constructor() { }

}
