import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerPlayerComponentComponent } from './owner-player-component.component';

describe('OwnerPlayerComponentComponent', () => {
  let component: OwnerPlayerComponentComponent;
  let fixture: ComponentFixture<OwnerPlayerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerPlayerComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerPlayerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
