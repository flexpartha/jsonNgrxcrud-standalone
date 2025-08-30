import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { ActivatedRoute, Router } from '@angular/router';
import { getUserById } from '../../state/user.selector';
import { User } from '../../model/user.interface';
import { updateUsers } from '../../state/user.action';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  editForm!: FormGroup;
  userId: any;
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.createUpdateForm();
    this.route.paramMap.subscribe((params) => {
      let id = params.get('id');
      this.store
        .select(getUserById, { id: id ?? '' })
        .subscribe((selectedData) => {
          console.log('DATA', selectedData);
          if (selectedData) {
            this.userId = selectedData.id;
            this.editForm.patchValue({
              name: selectedData.name,
              username: selectedData.username,
              email: selectedData.email,
              address: selectedData.address,
              phone: selectedData.phone,
              website: selectedData.website,
              company: selectedData.company,
            });
          }
        });
    });
  }

  createUpdateForm() {
    this.editForm = new FormGroup({
      name: new FormControl(null),
      username: new FormControl(null),
      email: new FormControl(null),
      address: new FormGroup({
        street: new FormControl(null),
        suite: new FormControl(null),
        city: new FormControl(null),
        zipcode: new FormControl(null),
        geo: new FormGroup({
          lat: new FormControl(null),
          lng: new FormControl(null),
        }),
      }),
      phone: new FormControl(null),
      website: new FormControl(null),
      company: new FormGroup({
        name: new FormControl(null),
        catchPhrase: new FormControl(null),
        bs: new FormControl(null),
      }),
    });
  }
  updateUser() {
    const user: User = {
      id: this.userId,
      name: this.editForm.value.name,
      username: this.editForm.value.username,
      email: this.editForm.value.email,
      address: this.editForm.value.address,
      phone: this.editForm.value.phone,
      website: this.editForm.value.website,
      company: this.editForm.value.company,
    };
    console.log('User:::---', user);
    this.store.dispatch(updateUsers({ user }));
    this.router.navigate(['/userList']);
  }
}
