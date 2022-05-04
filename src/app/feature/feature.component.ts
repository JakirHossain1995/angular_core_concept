import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyService } from '../services/myservice.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  myReactiveForm: FormGroup;
  genders= [{"id": 1, "genderType": "Male"}, {"id": 2, "genderType": "Female"}];
  naNames = ['Jakir Hossain', 'Jewel'];
  courses = ["JavaScript", "Java", "HTML", "CSS", "PHP", "Python", "Angular", "JDBC"]
  constructor(private myService: MyService) { }

  ngOnInit(): void {

  this.myReactiveForm = new FormGroup({
    'username': new FormControl(null, [Validators.required, this.naName.bind(this)]),
    'email': new FormControl("null@citi.com", [Validators.required, Validators.email]),
    'course': new FormControl(null),
    'gender': new FormControl("Female")
  })
  }

  onSubmit(){
    this.myService.getHttpResponse().subscribe(response =>{
        console.log(response);
    })
  }

  naName(control: FormControl){
    if(this.naNames.indexOf(control.value)!==-1){
      return {'nameIsNotAllowed': true}
    }
  }

}
