import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMockComponent } from './list-mock.component';

describe('ListMockComponent', () => {
  let component: ListMockComponent;
  let fixture: ComponentFixture<ListMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
