import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsManagementComponent } from './electronics-management.component';

describe('ElectronicsManagementComponent', () => {
  let component: ElectronicsManagementComponent;
  let fixture: ComponentFixture<ElectronicsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectronicsManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectronicsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
