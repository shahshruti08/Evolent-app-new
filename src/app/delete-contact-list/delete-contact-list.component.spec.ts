import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteContactListComponent } from './delete-contact-list.component';

describe('DeleteContactListComponent', () => {
  let component: DeleteContactListComponent;
  let fixture: ComponentFixture<DeleteContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteContactListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
