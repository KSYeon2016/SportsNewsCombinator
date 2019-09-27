import { Component, OnInit } from '@angular/core';
import { News } from '../../../models/news';
import { NewsapiService } from 'app/service/newsapi.service';

@Component({
  selector: 'snc-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  source: string;
  latest_news: News = new News("ok", this.source, "top");
  feedType: string;
  errorMessage = '';

  constructor(private _service:NewsapiService) { }

  ngOnInit() {
    this._service.fetchNewsFeed(this.feedType)
    .subscribe(
      item => this.latest_news = item,
      error => {
        this.errorMessage = 'Could not load ' + this.feedType + 'stories.';
        console.log(this.errorMessage);
      }
    );
  }
}
