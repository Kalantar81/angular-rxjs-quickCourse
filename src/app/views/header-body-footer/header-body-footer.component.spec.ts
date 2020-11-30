import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBodyFooterComponent } from './header-body-footer.component';

describe('HeaderBodyFooterComponent', () => {
  let component: HeaderBodyFooterComponent;
  let fixture: ComponentFixture<HeaderBodyFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBodyFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBodyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
