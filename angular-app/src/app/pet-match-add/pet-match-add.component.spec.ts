import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetMatchAddComponent } from './pet-match-add.component';

describe('PetMatchAddComponent', () => {
  let component: PetMatchAddComponent;
  let fixture: ComponentFixture<PetMatchAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetMatchAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetMatchAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
