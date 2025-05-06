import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterpageComponent } from './converterpage.component';

describe('ConverterpageComponent', () => {
  let component: ConverterpageComponent;
  let fixture: ComponentFixture<ConverterpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConverterpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConverterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
