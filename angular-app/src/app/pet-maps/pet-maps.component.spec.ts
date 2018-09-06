import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetMapsComponent } from './pet-maps.component';

describe('PetMapsComponent', () => {
  let component: PetMapsComponent;
  let fixture: ComponentFixture<PetMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
