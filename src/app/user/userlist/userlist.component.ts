import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../../model/user.interface';
import { Router } from '@angular/router';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { getUsers } from '../../state/user.selector';
import { deleteUser, loadUsers } from '../../state/user.action';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
})
export class UserlistComponent implements OnInit {
  usertList!: Observable<User[]>;

  constructor(private router: Router, public store: Store<AppState>) {}

  ngOnInit(): void {
    this.usertList = this.store.select(getUsers);
    this.store.dispatch(loadUsers());
  }

  navigateAdduser() {
    this.router.navigate(['/adduser']);
  }

  selectedUser(user: any) {
    this.router.navigate(['/edituser/', user]);
  }

  deleteUser(id: number) {
    this.store.dispatch(deleteUser({ id }));
    alert(id);
  }
}
