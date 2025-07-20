import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoItIsForSection } from './who-it-is-for-section';

describe('WhoItIsForSection', () => {
  let component: WhoItIsForSection;
  let fixture: ComponentFixture<WhoItIsForSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoItIsForSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoItIsForSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
