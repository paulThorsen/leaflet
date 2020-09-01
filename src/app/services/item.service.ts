import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';

interface UserRating {
  itemId: string;
  rating: boolean;
}

interface UserRatingResponse {
  userId: string;
  itemId: string;
  rating: boolean;
}

const GET_ITEM_URL = 'https://api.lib.byu.edu/leaflet/item';
const SAVE_USER_RATING_URL = 'https://api.lib.byu.edu/leaflet/pthorsen/ratings';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

  getItem(): Observable<Item> {
    return this.http.get<Item>(GET_ITEM_URL);
  }

  submitIsInterested(
    isInterested: boolean,
    itemId: string
  ): Observable<UserRatingResponse> {
    const userRating: UserRating = {
      itemId: itemId,
      rating: isInterested,
    };
    return this.http.post<UserRatingResponse>(SAVE_USER_RATING_URL, userRating);
  }
}
