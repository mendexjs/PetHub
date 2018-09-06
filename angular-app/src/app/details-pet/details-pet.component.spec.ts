import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPetComponent } from './details-pet.component';

describe('DetailsPetComponent', () => {
  let component: DetailsPetComponent;
  let fixture: ComponentFixture<DetailsPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
