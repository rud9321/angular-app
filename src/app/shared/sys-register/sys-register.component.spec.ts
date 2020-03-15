import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysRegisterComponent } from './sys-register.component';

describe('SysRegisterComponent', () => {
  let component: SysRegisterComponent;
  let fixture: ComponentFixture<SysRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
