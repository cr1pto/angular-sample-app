import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgeFormComponent } from './judge-form.component';

describe('JudgeFormComponent', () => {
  let component: JudgeFormComponent;
  let fixture: ComponentFixture<JudgeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JudgeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudgeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
