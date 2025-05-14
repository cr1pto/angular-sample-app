import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttorneyFormComponent } from './attorney-form.component';

describe('AttorneyFormComponent', () => {
  let component: AttorneyFormComponent;
  let fixture: ComponentFixture<AttorneyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttorneyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttorneyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
