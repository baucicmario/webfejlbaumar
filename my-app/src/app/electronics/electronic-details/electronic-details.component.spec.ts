import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicDetailsComponent } from './electronic-details.component';

describe('ElectronicDetailsComponent', () => {
  let component: ElectronicDetailsComponent;
  let fixture: ComponentFixture<ElectronicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectronicDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectronicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
