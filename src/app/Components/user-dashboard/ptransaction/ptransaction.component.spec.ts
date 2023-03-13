import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtransactionComponent } from './ptransaction.component';

describe('PtransactionComponent', () => {
  let component: PtransactionComponent;
  let fixture: ComponentFixture<PtransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
