import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdashbordComponent } from './customerdashbord.component';

describe('CustomerdashbordComponent', () => {
  let component: CustomerdashbordComponent;
  let fixture: ComponentFixture<CustomerdashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerdashbordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerdashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
