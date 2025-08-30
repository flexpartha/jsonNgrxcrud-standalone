import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { UserlistComponent } from './userlist.component';
import { AppState } from '../../store/app.state';
import { getUsers } from '../../state/user.selector';
import { loadUsers } from '../../state/user.action';
import { User } from '../../model/user.interface';

fdescribe('UserlistComponent', () => {
  let component: UserlistComponent;
  let fixture: ComponentFixture<UserlistComponent>;
  let store: Store<AppState>;
  let router: Router;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        UserlistComponent,
        StoreModule.forRoot({}), // Provide a mock store
      ],
      //declarations: [UserlistComponent],
      providers: [{ provide: Router, useValue: routerSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);

    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'select').and.returnValue(
      of([
        {
          id: 1,
          name: 'Test User',
          username: 'testusername',
          email: 'test@example.com',
          address: {
            street: 'Test Street',
            suite: 'Test Suite',
            city: 'Test City',
            zipcode: '12345',
            geo: {
              lat: '0.0',
              lng: '0.0',
            },
          },
          phone: '1234567890',
          website: 'http://test.com',
          company: {
            name: 'Test Company',
            catchPhrase: 'Test CatchPhrase',
            bs: 'Test BS',
          },
        },
      ])
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize user list observable', () => {
    component.ngOnInit();
    component.usertList.subscribe((users) => {
      expect(users.length).toBe(1);
      expect(users[0].name).toBe('Test User');
    });
  });

  it('should dispatch loadUsers action on init', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(loadUsers());
  });

  it('should navigate to add user route', () => {
    component.navigateAdduser();
    expect(router.navigate).toHaveBeenCalledWith(['/adduser']);
  });

  it('should navigate to edit user route', () => {
    const testUser: User = {
      id: 1,
      name: 'Test User',
      username: 'testusername',
      email: 'test@example.com',
      address: {
        street: 'Test Street',
        suite: 'Test Suite',
        city: 'Test City',
        zipcode: '12345',
        geo: {
          lat: '0.0',
          lng: '0.0',
        },
      },
      phone: '1234567890',
      website: 'http://test.com',
      company: {
        name: 'Test Company',
        catchPhrase: 'Test CatchPhrase',
        bs: 'Test BS',
      },
    };

    component.selectedUser(testUser);
    expect(router.navigate).toHaveBeenCalledWith(['/edituser/', testUser]);
  });
});
