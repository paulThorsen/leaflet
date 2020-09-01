import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-item-info-card',
  templateUrl: './item-info-card.component.html',
  styleUrls: ['./item-info-card.component.scss'],
})
export class ItemInfoCardComponent implements OnInit {
  private _item: Item = null;

  @Output() submitIsInterested: EventEmitter<boolean> = new EventEmitter();

  @Input() set item(item: Item) {
    this._item = item;
  }

  get item(): Item {
    return this._item;
  }

  showMore = false;

  showMoreOptionVisible = false;

  constructor() {}

  ngOnInit() {
    console.log(this.item.description.length);
    // TODO: need to look into a better solution to this.
    if (this.item.description.length > 290) {
      this.showMoreOptionVisible = true;
    }
  }

  toggleShowMore() {
    this.showMore = !this.showMore;
  }

  submitUserInterest(isInterested: boolean) {
    this.submitIsInterested.next(isInterested);
  }
}
