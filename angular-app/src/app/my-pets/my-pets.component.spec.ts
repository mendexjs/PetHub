import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPetsComponent } from './my-pets.component';

describe('MyPetsComponent', () => {
  let component: MyPetsComponent;
  let fixture: ComponentFixture<MyPetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
