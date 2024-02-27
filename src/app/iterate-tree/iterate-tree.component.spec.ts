import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IterateTreeComponent } from './iterate-tree.component';

describe('IterateTreeComponent', () => {
  let component: IterateTreeComponent;
  let fixture: ComponentFixture<IterateTreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IterateTreeComponent]
    });
    fixture = TestBed.createComponent(IterateTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
