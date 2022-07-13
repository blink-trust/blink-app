import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultOperationComponent } from './vault-operation.component';

describe('VaultOperationComponent', () => {
  let component: VaultOperationComponent;
  let fixture: ComponentFixture<VaultOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaultOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaultOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
