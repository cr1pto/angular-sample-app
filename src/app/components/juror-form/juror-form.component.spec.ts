import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JurorFormComponent } from './juror-form.component';

describe('JurorFormComponent', () => {
  let component: JurorFormComponent;
  let fixture: ComponentFixture<JurorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JurorFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JurorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
