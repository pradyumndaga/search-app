import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppState } from "../../types";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class AnimeDetailService {
    constructor(
        private http: HttpClient,
    ) {}

    fetchAnimeList(): Observable<any> {
        const baseUrl = "https://api.jikan.moe/v4/characters?page=0&limit=15&q=&order_by=favorites&sort=desc";
        return this.http.get<any>(baseUrl)
    }
}