import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'MyProject';
  public count = 0;
  myObservable: Observable<any>;
  constructor(){
    
  }
  ngOnInit(): void {
    /* this.myObservable = new Observable((observer)=>{
      setInterval(()=>{
        this.count++;
        observer.next(this.count);
      }, 500)
    }) */
  }
}
