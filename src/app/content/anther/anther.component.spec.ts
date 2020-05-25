import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntherComponent } from './anther.component';

describe('AntherComponent', () => {
  let component: AntherComponent;
  let fixture: ComponentFixture<AntherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
