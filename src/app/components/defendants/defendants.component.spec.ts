import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefendantsComponent } from './defendants.component';

describe('DefendantsComponent', () => {
  let component: DefendantsComponent;
  let fixture: ComponentFixture<DefendantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefendantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefendantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
