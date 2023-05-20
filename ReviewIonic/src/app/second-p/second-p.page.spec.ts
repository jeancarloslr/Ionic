import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondPPage } from './second-p.page';

describe('SecondPPage', () => {
  let component: SecondPPage;
  let fixture: ComponentFixture<SecondPPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(SecondPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
