import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatPatientComponent } from './creat-patient.component';

describe('CreatPatientComponent', () => {
  let component: CreatPatientComponent;
  let fixture: ComponentFixture<CreatPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
