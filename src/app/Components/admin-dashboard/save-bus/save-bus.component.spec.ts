import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveTrainsComponent } from './save-trains.component';

describe('SaveTrainsComponent', () => {
  let component: SaveTrainsComponent;
  let fixture: ComponentFixture<SaveTrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveBusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
