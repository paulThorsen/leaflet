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
const BASE_URI = 'https://leaflet-cors.origin.lib.byu.edu/leaflet';
const GET_ITEM_URL_PATH = '/item';
const SAVE_USER_RATING_URL_PATH = '/users/pthorsen/ratings';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

  getItem(): Observable<Item> {
    return this.http.get<Item>(BASE_URI + GET_ITEM_URL_PATH);
  }

  submitIsInterested(
    isInterested: boolean,
    itemId: string
  ): Observable<UserRatingResponse> {
    const userRating: UserRating = {
      itemId: itemId,
      rating: isInterested,
    };
    console.log(userRating);
    return this.http.post<UserRatingResponse>(
      BASE_URI + SAVE_USER_RATING_URL_PATH,
      userRating
    );
  }
}
