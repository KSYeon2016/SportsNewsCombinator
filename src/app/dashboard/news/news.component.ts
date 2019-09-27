import { Component, OnInit } from '@angular/core';
import { News } from '../../../models/news';
import { NewsapiService } from 'app/service/newsapi.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private _service:NewsapiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.feedType = (data as any).feedType;
      this.source = (data as any).source;
    });

    this._service.fetchNewsFeed(this.feedType)
    .subscribe(
      items => this.latest_news = items,
      error => {
        this.errorMessage = 'Could not load ' + this.feedType + 'stories.';
        console.log(this.errorMessage);
      }
    );
  }
}
