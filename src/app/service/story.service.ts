import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { StoryItem } from '../story-item.interface';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private apiURL = environment.baseURL;

  private storiesURL = `${this.apiURL}topstories.json`;

  constructor(private http: HttpClient) { }

  fetchStories(): Observable<string[]> {
    return this.http.get<string[]>(this.storiesURL)
    .pipe(
      catchError(err => throwError(err))
    );
  }

  fetchStoryItems(id: any): Observable<StoryItem> {
    return this.http.get<StoryItem>(`${this.apiURL}item/${id}.json`)
    .pipe(
      catchError(err => throwError(err))
    )
  }

  fetchUserById(id: string): Observable<any> {
    return this.http.get(`${this.apiURL}user/${id}.json`)
    .pipe(
      catchError(err => throwError(err))
    )
  }
}
