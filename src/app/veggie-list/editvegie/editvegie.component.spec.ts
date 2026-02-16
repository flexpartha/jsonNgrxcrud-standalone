import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvegieComponent } from './editvegie.component';

describe('EditvegieComponent', () => {
  let component: EditvegieComponent;
  let fixture: ComponentFixture<EditvegieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditvegieComponent]
    });
    fixture = TestBed.createComponent(EditvegieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
