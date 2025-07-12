import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpScrollComponent } from './up-scroll.component';

describe('UpScrollComponent', () => {
  let component: UpScrollComponent;
  let fixture: ComponentFixture<UpScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
