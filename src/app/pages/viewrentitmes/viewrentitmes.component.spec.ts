import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrentitmesComponent } from './viewrentitmes.component';

describe('ViewrentitmesComponent', () => {
  let component: ViewrentitmesComponent;
  let fixture: ComponentFixture<ViewrentitmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewrentitmesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewrentitmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
