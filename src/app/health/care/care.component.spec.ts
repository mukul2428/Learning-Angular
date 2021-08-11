import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareComponent } from './care.component';

describe('CareComponent', () => {
  let component: CareComponent;
  let fixture: ComponentFixture<CareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
