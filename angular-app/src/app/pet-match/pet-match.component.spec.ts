import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetMatchComponent } from './pet-match.component';

describe('PetMatchComponent', () => {
  let component: PetMatchComponent;
  let fixture: ComponentFixture<PetMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
