import { Component, OnInit } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';
import { AnimeDetailService } from 'src/app/store/anime-details/api/anime-details.api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTxt = '';
  search = '';
  searchModelChanged: Subject<string> = new Subject<string>();
  searchWordSubscription!: Subscription;
  debounceTime = 500;
  constructor(
    private animeDetailService: AnimeDetailService,
  ) { }

  ngOnInit(): void {
    this.searchTxt = 'searchTxt';
    this.searchWordSubscription = this.searchModelChanged
      .pipe(
        debounceTime(this.debounceTime),
      )
      .subscribe((val) => {
        this.functionToBeCalled(val);
      });
  }
  functionToBeCalled(val: string) {
    console.log(val);
    console.log(this.animeDetailService.fetchAnimeList());
  }

  filterList(event: any) {
    console.log(event.value);
    this.searchModelChanged.next(event.value);
  }

}
