import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcmaClientComponent } from './ecma-client.component';

describe('EcmaClientComponent', () => {
  let component: EcmaClientComponent;
  let fixture: ComponentFixture<EcmaClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcmaClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcmaClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
