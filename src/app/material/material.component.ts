import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

  /* @HostListener('click') onClickMAterial(){
    alert('This is a test host listner');
  } */

}
