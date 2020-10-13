import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadQrComponent } from './read-qr.component';

describe('ReadQrComponent', () => {
  let component: ReadQrComponent;
  let fixture: ComponentFixture<ReadQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
