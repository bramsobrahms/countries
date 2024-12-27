import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesContinentComponent } from './countries-continent.component';

describe('CountriesContinentComponent', () => {
  let component: CountriesContinentComponent;
  let fixture: ComponentFixture<CountriesContinentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesContinentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesContinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
