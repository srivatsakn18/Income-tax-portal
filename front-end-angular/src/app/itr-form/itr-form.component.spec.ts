import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItrFormComponent } from './itr-form.component';

describe('ItrFormComponent', () => {
  let component: ItrFormComponent;
  let fixture: ComponentFixture<ItrFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItrFormComponent]
    });
    fixture = TestBed.createComponent(ItrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
