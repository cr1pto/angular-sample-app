import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttorneysComponent } from './attorneys.component';

describe('AttorneysComponent', () => {
  let component: AttorneysComponent;
  let fixture: ComponentFixture<AttorneysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttorneysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttorneysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
