import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  ngOnInit(){
    const myObject = [{ 
      name: true, 
      age: true, 
      gender: false 
    },
    { 
      name: false, 
      age: true, 
      gender: false 
    },
    { 
      name: false, 
      age: true, 
      gender: false 
    }];
    console.log(myObject);
    myObject.map(data =>{
      for (let key in data) {
        data[key] = data[key] ? 1 : 2;
      }
    });

    console.log(myObject);
  }
}


// angular form is group of controls
