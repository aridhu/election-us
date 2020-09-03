import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockElectionsComponent } from './mock-elections.component';

describe('MockElectionsComponent', () => {
  let component: MockElectionsComponent;
  let fixture: ComponentFixture<MockElectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockElectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockElectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
