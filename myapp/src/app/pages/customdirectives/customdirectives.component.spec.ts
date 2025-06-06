import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomdirectivesComponent } from './customdirectives.component';

describe('CustomdirectivesComponent', () => {
  let component: CustomdirectivesComponent;
  let fixture: ComponentFixture<CustomdirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomdirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomdirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
