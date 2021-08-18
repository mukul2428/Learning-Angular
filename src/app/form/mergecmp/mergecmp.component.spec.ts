import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergecmpComponent } from './mergecmp.component';

describe('MergecmpComponent', () => {
  let component: MergecmpComponent;
  let fixture: ComponentFixture<MergecmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergecmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergecmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
