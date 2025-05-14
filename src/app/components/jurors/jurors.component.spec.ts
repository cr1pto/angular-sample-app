import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JurorsComponent } from './jurors.component';

describe('JurorsComponent', () => {
  let component: JurorsComponent;
  let fixture: ComponentFixture<JurorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JurorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JurorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
