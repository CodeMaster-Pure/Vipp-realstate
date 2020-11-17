import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCodePageComponent } from './add-code-page.component';

describe('DemoPageComponent', () => {
  let component: AddCodePageComponent;
  let fixture: ComponentFixture<AddCodePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCodePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCodePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
