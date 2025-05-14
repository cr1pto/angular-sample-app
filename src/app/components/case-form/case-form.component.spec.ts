import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseFormComponent } from './case-form.component';

describe('CaseFormComponent', () => {
  let component: CaseFormComponent;
  let fixture: ComponentFixture<CaseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
