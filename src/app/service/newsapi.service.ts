import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { News } from "models/news";

@Injectable()
export class NewsapiService {
    baseUrl: string;
    static apiKey: string = "b07f98f6575d47d99fd6057668f21cb2";

    constructor(private _http:Http) {
        this.baseUrl = 'https://newsapi.org/v1/articles';
    }

    // 웹서버에서 데이터를 가져오는 역할을 하는 메서드
    public fetchNewsFeed(source: string): Observable<News> {
        return this._http.get(`${this.baseUrl}/?source=${source}&sortBy=top&apiKey=${NewsapiService.apiKey}`)
        .map((response: Response) => <News>response.json())
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}