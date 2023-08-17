import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {


  myReactiveForm!: FormGroup
  // family!:any
  formData = {
    name: '',
    email: '',
    password: '',
    phno: '',
    city: '',
    family: [{
      relation: '',
      rname: ''
    }]
  }
  isSubmitted: boolean = false;
  countBox: number = 1;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myReactiveForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      phno: ['', [Validators.required]],
      city: ['', [Validators.required]],
      family: this.fb.array([
        this.fb.group({
          relation: ['', Validators.required],
          rname: ['', Validators.required]
        })
      ])
    })
  }

  onSubmit(form: any) {
    console.log(this.myReactiveForm);
    this.isSubmitted = true;
    this.formData.name = form.value.name;
    this.formData.email = form.value.email;
    this.formData.password = form.value.password;
    this.formData.phno = form.value.phno;
    this.formData.city = form.value.city;

    for (let i = 0; i < this.countBox; i++) {

      this.formData.family[i].relation = form.value.family[i].relation;
      this.formData.family[i].rname = form.value.family[i].rname;
      // console.log(form.value.family[i].relation);
    }
    // console.log(this.myReactiveForm.get('family')?.get('0')?.get('relation')?.value);
  }

  get familyMember() {
    // console.log("Sds");
    return this.myReactiveForm.get('family') as FormArray;
  }

  onAddMember() {
    // console.log("Sds");
    this.countBox++;
    this.formData.family.push(
      {
        relation: '',
        rname: ''
      }
    );
    // console.log(this.formData.family);
    const member = this.fb.group({
      relation: ['', Validators.required],
      rname: ['', Validators.required]
    });
    this.familyMember.push(member);
  }

  removeFamily() {
    this.familyMember.removeAt(this.familyMember.length - 1);
  }
}
