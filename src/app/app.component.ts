import { Component, OnInit } from '@angular/core';
import { Item } from './models/item';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  item: Item = null;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItem().subscribe((item) => {
      console.log(item)
      this.item = item;
    });
  }
}
