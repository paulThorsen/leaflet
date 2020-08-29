import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInfoCardComponent } from './item-info-card.component';

describe('ItemInfoCardComponent', () => {
  let component: ItemInfoCardComponent;
  let fixture: ComponentFixture<ItemInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
