import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatedReturnComponent } from './calculated-return.component';

describe('CalculatedReturnComponent', () => {
  let component: CalculatedReturnComponent;
  let fixture: ComponentFixture<CalculatedReturnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatedReturnComponent]
    });
    fixture = TestBed.createComponent(CalculatedReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
