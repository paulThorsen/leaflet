import { Component, OnInit } from '@angular/core';
import { Item } from './models/item';
import { ItemService } from './services/item.service';
import { fadeIn } from '../assets/animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeIn],
})
export class AppComponent implements OnInit {
  item: Item = null;
  isLoading = false;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.getItem();
  }

  submitUserSelection(isInterested: boolean) {
    this.isLoading = true;
    this.itemService
      .submitIsInterested(isInterested, this.item.id)
      .subscribe((response) => {
        console.log(response);
        this.getItem();
      });
  }

  getItem() {
    this.itemService.getItem().subscribe((item) => {
      console.log(item);
      this.item = item;
      this.isLoading = false;
    });
  }
}
