import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AppState } from '../../types';
import { HttpClient } from '@angular/common/http';
import { transformAnimeList } from './anime-details.api-transform';

@Injectable({
  providedIn: 'root',
})
export class AnimeDetailService {
  constructor(private http: HttpClient) {}

  fetchAnimeList(payload: any): Observable<AppState> {
    const page = payload.page;
    const txt = payload.txt;
    const baseUrl =
      'https://api.jikan.moe/v4/characters?&limit=15&order_by=favorites&sort=desc';
    let url = `${baseUrl}&page=${page}&q=${txt}`;
    console.log('Api triggered!');
    return this.http.get<any>(url).pipe(map((res) => transformAnimeList(res)));
  }
}
