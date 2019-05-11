import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBlocksComponent } from './manage-blocks.component';

describe('ManageBlocksComponent', () => {
  let component: ManageBlocksComponent;
  let fixture: ComponentFixture<ManageBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
