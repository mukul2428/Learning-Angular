import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DesignutilityService } from '../appServices/designutility.service';
import { MessageService } from '../appServices/message.service';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  gender = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' }
  ]
  defaultGender = 'Male';

  //added "!" to get rid of initialization 
  myReactiveForm!: FormGroup

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'userDetails': new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, Validators.required),
      }),
      'gender': new FormControl('Male'), //initial value setup
      'skills': new FormArray([
        new FormControl(null, Validators.required)
      ])
    });
  }
  onSubmit() {
    console.log(this.myReactiveForm);
  }
  onAddSkills(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.myReactiveForm.get('skills')).push(control);
  }


  //services
  btnClick(){
    const msgService = new MessageService();
    msgService.messageAlert();
  }

   //for subjects
   subjectVar: string = "mukul"

  //using subjects by injecting services
  constructor(private _msgService: DesignutilityService) { 
    this._msgService.subjectVar.subscribe(subVar => {
      this.subjectVar = subVar;
    })
  }

}
