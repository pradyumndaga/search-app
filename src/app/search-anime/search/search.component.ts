import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() set totalAnime(value: number) {
    this.totalMatchTxt = `Total ${value} matching anime characters found`;
  }
  @Output() animeSearchtxt = new EventEmitter<string>();
  searchModelChanged: Subject<string> = new Subject<string>();
  searchWordSubscription!: Subscription;
  debounceTime = 500;
  totalMatchTxt = '';
  constructor() {}

  ngOnInit(): void {
    this.searchWordSubscription = this.searchModelChanged
      .pipe(debounceTime(this.debounceTime))
      .subscribe((val) => {
        this.emitSearchText(val);
      });
  }
  emitSearchText(val: string) {
    this.animeSearchtxt.emit(val);
  }

  filterList(event: any) {
    this.searchModelChanged.next(event.value);
  }
}
