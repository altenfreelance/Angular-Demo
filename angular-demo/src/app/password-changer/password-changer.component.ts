import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import {CredentialsValidators} from '../common/validators/credentials.validators'

@Component({
  selector: 'app-password-changer',
  templateUrl: './password-changer.component.html',
  styleUrls: ['./password-changer.component.css']
})
export class PasswordChangerComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder) { 
    FormControl
    this.form = fb.group({
      // Async Validators are the third arg
      old: ['', Validators.required, CredentialsValidators.password],
      new: ['',Validators.required],
      confirm: ['',[Validators.required]]
    },
    { validators: CredentialsValidators.passwordsMustMatch});

  }

  get old(){
    return this.form.get('old');
  }
  get new(){
    return this.form.get('new');
  }
  get confirm(){
    return this.form.get('confirm');
  }

  ngOnInit() {
  }

}
