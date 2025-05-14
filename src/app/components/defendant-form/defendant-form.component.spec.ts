import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefendantFormComponent } from './defendant-form.component';

describe('DefendantFormComponent', () => {
  let component: DefendantFormComponent;
  let fixture: ComponentFixture<DefendantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefendantFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefendantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
