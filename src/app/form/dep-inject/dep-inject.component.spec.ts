import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepInjectComponent } from './dep-inject.component';

describe('DepInjectComponent', () => {
  let component: DepInjectComponent;
  let fixture: ComponentFixture<DepInjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepInjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepInjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
