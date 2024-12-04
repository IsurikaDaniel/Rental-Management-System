import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditmsformComponent } from './additmsform.component';

describe('AdditmsformComponent', () => {
  let component: AdditmsformComponent;
  let fixture: ComponentFixture<AdditmsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditmsformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditmsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
