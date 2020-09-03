import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupMockComponent } from './setup-mock.component';

describe('SetupMockComponent', () => {
  let component: SetupMockComponent;
  let fixture: ComponentFixture<SetupMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupMockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
