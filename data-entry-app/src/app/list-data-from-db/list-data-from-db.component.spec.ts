import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDataFromDbComponent } from './list-data-from-db.component';

describe('ListDataFromDbComponent', () => {
  let component: ListDataFromDbComponent;
  let fixture: ComponentFixture<ListDataFromDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDataFromDbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDataFromDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
