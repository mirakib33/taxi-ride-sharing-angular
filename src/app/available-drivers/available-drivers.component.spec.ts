import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableDriversComponent } from './available-drivers.component';

describe('AvailableDriversComponent', () => {
  let component: AvailableDriversComponent;
  let fixture: ComponentFixture<AvailableDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableDriversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
