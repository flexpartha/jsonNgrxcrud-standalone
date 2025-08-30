import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ServiceService } from '../services/service.service';
import { map, mergeMap } from 'rxjs';
import { loadUsers, loadUsersSuccess } from './user.action';

@Injectable()
export class UserEffects {
  constructor(
    private action$: Actions,
    private userService: ServiceService,
    private router: Router
  ) {}

  loadUsers$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadUsers),
      mergeMap((action) => {
        return this.userService.getUsers().pipe(
          map((user: any) => {
            return loadUsersSuccess({ user });
          })
        );
      })
    );
  });
}
