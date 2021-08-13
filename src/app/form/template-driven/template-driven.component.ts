import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {


  defaultCourse = 'Angular';
  userName = '';
  gender = [
    {id : '1', value:'Male'},
    {id : '2', value:'Female'}
  ]
  defaultGender = 'Male';
  submitted = false;
  formData = {
    email: '',
    password: '',
    course: '',
    gender: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log(form);
    this.submitted = true;
    this.formData.email = form.value.userDetails.email;
    this.formData.password = form.value.userDetails.password;
    this.formData.course = form.value.course;
    this.formData.gender = form.value.gender;

    form.reset();
  }

}
