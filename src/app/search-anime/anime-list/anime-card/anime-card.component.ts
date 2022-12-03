import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/store/types/data.type';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.scss'],
})
export class AnimeCardComponent implements OnInit {
  @Input() anime!: Data;
  isMobile = false;
  constructor() {}

  ngOnInit(): void {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}
