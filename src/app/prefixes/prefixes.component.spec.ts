import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefixesComponent } from './prefixes.component';

describe('PrefixesComponent', () => {
  let component: PrefixesComponent;
  let fixture: ComponentFixture<PrefixesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrefixesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefixesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
