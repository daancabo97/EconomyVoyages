import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyagersComponent } from './voyagers.component';

describe('VoyagersComponent', () => {
  let component: VoyagersComponent;
  let fixture: ComponentFixture<VoyagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoyagersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoyagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
