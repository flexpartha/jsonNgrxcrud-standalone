import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserComponent } from './edit-user.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { updateUsers } from '../../state/user.action';

fdescribe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;
  let store: Store<AppState>;
  let router: Router;
  let route: ActivatedRoute;
  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const routeStub = {
      paramMap: of({
        get: (key: string) => '1', // Simulate route parameter
      }),
    };
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        EditUserComponent,
        StoreModule.forRoot({}),
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: routeStub },
      ],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
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

  it('should initialize the form', () => {
    component.ngOnInit();
    expect(component.editForm).toBeDefined();
    expect(component.editForm.controls['name']).toBeDefined();
    expect(component.editForm.controls['username']).toBeDefined();
    expect(component.editForm.controls['email']).toBeDefined();
    expect(component.editForm.controls['address']).toBeDefined();
    expect(component.editForm.controls['phone']).toBeDefined();
    expect(component.editForm.controls['website']).toBeDefined();
    expect(component.editForm.controls['company']).toBeDefined();
  });

  it('should populate form with user data', () => {
    component.ngOnInit();
    expect(component.editForm.value.name).toBe('Test User');
    expect(component.editForm.value.username).toBe('testusername');
    expect(component.editForm.value.email).toBe('test@example.com');
    expect(component.editForm.value.address.street).toBe('Test Street');
    expect(component.editForm.value.phone).toBe('1234567890');
    expect(component.editForm.value.website).toBe('http://test.com');
    expect(component.editForm.value.company.name).toBe('Test Company');
  });

  it('should dispatch updateUsers action and navigate on form submission', () => {
    component.ngOnInit();
    component.updateUser();

    expect(store.dispatch).toHaveBeenCalledWith(
      updateUsers({
        user: {
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
      })
    );
    expect(router.navigate).toHaveBeenCalledWith(['/userList']);
  });
});
