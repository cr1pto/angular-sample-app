import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmatesComponent } from './inmates.component';

describe('InmatesComponent', () => {
  let component: InmatesComponent;
  let fixture: ComponentFixture<InmatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InmatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
