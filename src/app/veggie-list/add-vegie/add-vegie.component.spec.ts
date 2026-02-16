import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVegieComponent } from './add-vegie.component';

describe('AddVegieComponent', () => {
  let component: AddVegieComponent;
  let fixture: ComponentFixture<AddVegieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddVegieComponent]
    });
    fixture = TestBed.createComponent(AddVegieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
