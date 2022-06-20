import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { forBiddenNameValidator } from '../shared/username-validator';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  get userName() {
    return this.RegistrationForm.get('username');
  }

  constructor(private fb: FormBuilder) {}
  RegistrationForm = this.fb.group({
    username: [
      '',
      [Validators.required, Validators.minLength(3)],
      forBiddenNameValidator(/admin/),
    ],
    email: [''],
    password: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      pincode: [''],
    }),
  });
  ngOnInit(): void {}
}
