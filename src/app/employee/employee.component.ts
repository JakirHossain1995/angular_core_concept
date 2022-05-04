import { Component, OnInit } from '@angular/core';
import { delay, concatMap, mergeMap, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  videoArrayMergeMap = [];
  videoArraySwitchMap = [];
  videoArrayConcatMap = [];

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News', 'Sports']);

    //MergeMap --> flatten the source observable values and returns the flatten values all at a time 
    source.pipe( mergeMap(res => this.getData(res))).subscribe( response => this.videoArrayMergeMap.push(response));

    //SwitchMap --> projects each source value to an observable and emits the most recent value from the projected observable
    source.pipe( switchMap(res => this.getData(res))).subscribe( response => {
      console.log('Response from SwitchMap ',response);
      this.videoArraySwitchMap.push(response);
    });

    //concatMap --> returns the observable values in the sequence that they are getting from the source
    source.pipe( concatMap(res => this.getData(res))).subscribe(response => {
      console.log('Response from ConcatMap ',response);
      this.videoArrayConcatMap.push(response);
    });
  }

  getData(data){
    return of (data + " video uploaded").pipe(delay(1000));
  }

}
