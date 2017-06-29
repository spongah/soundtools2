import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChakratunerComponent } from './chakratuner.component';

describe('ChakratunerComponent', () => {
  let component: ChakratunerComponent;
  let fixture: ComponentFixture<ChakratunerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChakratunerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChakratunerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
