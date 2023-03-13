import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveSeatsComponent } from './save-seats.component';

describe('SaveSeatsComponent', () => {
  let component: SaveSeatsComponent;
  let fixture: ComponentFixture<SaveSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveSeatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
