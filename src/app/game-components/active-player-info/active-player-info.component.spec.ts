import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePlayerInfoComponent } from './active-player-info.component';

describe('ActivePlayerInfoComponent', () => {
  let component: ActivePlayerInfoComponent;
  let fixture: ComponentFixture<ActivePlayerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivePlayerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivePlayerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
