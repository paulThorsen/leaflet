import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-item-info-card',
  templateUrl: './item-info-card.component.html',
  styleUrls: ['./item-info-card.component.scss'],
})
export class ItemInfoCardComponent {
  private _item: Item = null;

  @Input() set item(item: Item) {
    this._item = item;
  }

  get item(): Item {
    return this._item;
  }

  showMore = false;

  constructor() {}

  toggleShowMore() {
    this.showMore = !this.showMore;
  }
}
