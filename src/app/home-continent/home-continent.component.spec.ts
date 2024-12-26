import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContinentComponent } from './home-continent.component';

describe('HomeContinentComponent', () => {
  let component: HomeContinentComponent;
  let fixture: ComponentFixture<HomeContinentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeContinentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeContinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
