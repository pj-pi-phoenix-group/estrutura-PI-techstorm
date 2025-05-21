import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpComponent } from './lp.component';

describe('LpComponent', () => {
  let component: LpComponent;
  let fixture: ComponentFixture<LpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
