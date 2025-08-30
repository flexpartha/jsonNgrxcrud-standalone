import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { Router } from '@angular/router';
import { AdduserComponent } from './adduser.component';
import { AppState } from '../../store/app.state';
import { addUser } from '../../state/user.action';
import { User } from '../../model/user.interface';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

fdescribe('AdduserComponent', () => {
  let component: AdduserComponent;
  let fixture: ComponentFixture<AdduserComponent>;
  let store: Store<AppState>;
  let router: Router;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        AdduserComponent,
        StoreModule.forRoot({}), // Provide a mock store
      ],
      //declarations: [ AdduserComponent ],
      providers: [{ provide: Router, useValue: routerSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    component.ngOnInit();
    expect(component.userForm).toBeDefined();
    expect(component.userForm.controls['name']).toBeDefined();
    expect(component.userForm.controls['username']).toBeDefined();
    expect(component.userForm.controls['email']).toBeDefined();
    expect(component.userForm.controls['address']).toBeDefined();
    expect(component.userForm.controls['phone']).toBeDefined();
    expect(component.userForm.controls['website']).toBeDefined();
    expect(component.userForm.controls['company']).toBeDefined();
  });

  it('should check form validity', () => {
    component.ngOnInit();
    component.userForm.controls['name'].setValue('');
    component.userForm.controls['username'].setValue('');
    component.userForm.controls['email'].setValue('');
    expect(component.userForm.valid).toBeFalsy();

    component.userForm.controls['name'].setValue('Test Name');
    component.userForm.controls['username'].setValue('testusername');
    component.userForm.controls['email'].setValue('test@example.com');
    expect(component.userForm.valid).toBeTruthy();
  });

  it('should dispatch addUser action and navigate on form submission', () => {
    component.ngOnInit();
    component.userForm.controls['name'].setValue('Test Name');
    component.userForm.controls['username'].setValue('testusername');
    component.userForm.controls['email'].setValue('test@example.com');
    component.userForm.controls['address'].setValue({
      street: 'Test Street',
      suite: 'Suite 123',
      city: 'Test City',
      zipcode: '12345',
      geo: {
        lat: '0.0',
        lng: '0.0',
      },
    });
    component.userForm.controls['phone'].setValue('1234567890');
    component.userForm.controls['website'].setValue('http://test.com');
    component.userForm.controls['company'].setValue({
      name: 'Test Company',
      catchPhrase: 'Test CatchPhrase',
      bs: 'Test BS',
    });

    component.addUser();

    expect(store.dispatch).toHaveBeenCalledWith(
      addUser({
        user: {
          name: 'Test Name',
          username: 'testusername',
          email: 'test@example.com',
          address: {
            street: 'Test Street',
            suite: 'Suite 123',
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
