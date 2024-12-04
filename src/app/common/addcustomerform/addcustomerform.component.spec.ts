import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcustomerformComponent } from './addcustomerform.component';

describe('AddcustomerformComponent', () => {
  let component: AddcustomerformComponent;
  let fixture: ComponentFixture<AddcustomerformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddcustomerformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcustomerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
