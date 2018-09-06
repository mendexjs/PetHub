import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCareComponent } from './pet-care.component';

describe('PetCareComponent', () => {
  let component: PetCareComponent;
  let fixture: ComponentFixture<PetCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
