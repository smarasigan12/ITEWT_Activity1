import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducBackgroundComponent } from './educ-background.component';

describe('EducBackgroundComponent', () => {
  let component: EducBackgroundComponent;
  let fixture: ComponentFixture<EducBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
