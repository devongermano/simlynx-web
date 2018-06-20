import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseIndicatorComponent } from './mouse-indicator.component';

describe('MouseIndicatorComponent', () => {
  let component: MouseIndicatorComponent;
  let fixture: ComponentFixture<MouseIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
