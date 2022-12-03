import { Component, Input, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/types';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
})
export class AnimeListComponent implements OnInit {
  @Input() animeList!: AppState;
  constructor() {}

  ngOnInit(): void {}
}
