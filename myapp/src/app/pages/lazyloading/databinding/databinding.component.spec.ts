import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingComponentTwo } from './databinding.component';

describe('DatabindingComponent', () => {
  let component: DatabindingComponentTwo;
  let fixture: ComponentFixture<DatabindingComponentTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabindingComponentTwo]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DatabindingComponentTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
