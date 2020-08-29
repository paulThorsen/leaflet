import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';

const GET_ITEM_URL = 'https://api.lib.byu.edu/leaflet/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

  getItem(): Observable<Item> {
    return this.http.get<Item>(GET_ITEM_URL);
  }
}
