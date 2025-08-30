import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Router } from '@angular/router';
import { User } from '../../model/user.interface';
import { addUser } from '../../state/user.action';

@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
})
export class AdduserComponent implements OnInit {
  userForm!: FormGroup;

  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street: [''],
        suite: [''],
        city: [''],
        zipcode: [''],
        geo: this.fb.group({
          lat: [''],
          lng: [''],
        }),
      }),
      phone: [''],
      website: [''],
      company: this.fb.group({
        name: [''],
        catchPhrase: [''],
        bs: [''],
      }),
    });
  }
  addUser() {
    //console.log('Submitted value',this.userForm.value);
    const user: User = {
      name: this.userForm.value.name,
      username: this.userForm.value.username,
      email: this.userForm.value.email,
      address: this.userForm.value.address,
      phone: this.userForm.value.phone,
      website: this.userForm.value.website,
      company: this.userForm.value.company,
    };
    console.log('User:::---', user);
    this.store.dispatch(addUser({ user }));
    this.router.navigate(['/userList']);
  }
}
