import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultDataComponent } from './vault-data.component';

describe('VaultDataComponent', () => {
  let component: VaultDataComponent;
  let fixture: ComponentFixture<VaultDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaultDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaultDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
