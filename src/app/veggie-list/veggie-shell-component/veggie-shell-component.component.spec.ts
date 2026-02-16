import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeggieShellComponentComponent } from './veggie-shell-component.component';

describe('VeggieShellComponentComponent', () => {
  let component: VeggieShellComponentComponent;
  let fixture: ComponentFixture<VeggieShellComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VeggieShellComponentComponent]
    });
    fixture = TestBed.createComponent(VeggieShellComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
