import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NgWaTableComponent } from './ng-wa-table.component';
import { NgWaTableModule } from './ng-wa-table.module';

describe('NgWaTableComponent', () => {
  let component: NgWaTableComponent;
  let fixture: ComponentFixture<NgWaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgWaTableModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgWaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
