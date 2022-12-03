import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AnimeDetailService } from '../store/anime-details/api/anime-details.api';
import { AppState } from '../store/types';
import { Pagination } from '../store/types/pagination.type';

@Component({
  selector: 'app-search-anime',
  templateUrl: './search-anime.component.html',
  styleUrls: ['./search-anime.component.scss'],
})
export class SearchAnimeComponent implements OnInit {
  animeList!: AppState;
  searchTxt: string = '';
  page!: number;
  pageIndex!: number;
  pageSize!: number;
  length: number = 0;
  pageEvent!: PageEvent;
  constructor(private animeDetailService: AnimeDetailService) {}

  ngOnInit(): void {
    this.page = 0;
    const payload = {
      page: this.page,
      txt: this.searchTxt,
    };
    this.fetchAnimeList(payload);
  }
  fetchAnimeList(payload: any) {
    this.animeDetailService.fetchAnimeList(payload).subscribe((val) => {
      this.animeList = val;
      const handlePage = {
        length: this.animeList.pagination.items.total,
        pageSize: this.animeList.pagination.items.count,
      };
      this.page = this.animeList.pagination.current_page;
      this.handlePaginator(handlePage);
    });
  }
  handlePaginator(handlePage: any) {
    this.length = handlePage.length;
    this.pageSize = handlePage.pageSize;
  }
  UpdateAmineListFromSearch(event: any) {
    console.log('emit', event);
    this.searchTxt = event;
    this.page = 0;
    this.pageIndex = 0;
    const payload = {
      page: this.page,
      txt: this.searchTxt,
    };
    const handlePage = {
      length: 0,
      pageSize: 15,
    };
    this.handlePaginator(handlePage);
    this.fetchAnimeList(payload);
  }

  handlePageEvent(e: PageEvent) {
    let payload;
    if (e.pageIndex + 2 > this.page) {
      payload = {
        page: this.page + 1,
        txt: this.searchTxt,
      };
    } else {
      payload = {
        page: this.page - 1,
        txt: this.searchTxt,
      };
    }
    this.fetchAnimeList(payload);
  }
}
