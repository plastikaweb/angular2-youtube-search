import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CurrentSearch} from './models/search-query.model';
import {Observable} from 'rxjs/Observable';
import {YoutubeService} from './services/youtube.service';
import {SearchResult} from './models/search-result.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'One Source of Truth for Angular 2';
    private state: CurrentSearch;
    private currentSearch: Observable<CurrentSearch>;
    private searchResults: SearchResult[] = [];
    private disableSearch = false;
    private errorEmptySearch = true;
    private errorLocation = false;
    private errorLocationMessage = '';

    constructor(private store: Store<CurrentSearch>,
                private youtube: YoutubeService) {

        this.currentSearch = this.store.select<CurrentSearch>('currentSearch');
        this.youtube.searchResults.subscribe((results: SearchResult[]) => {
            this.searchResults = results
        });

    }

    ngOnInit() {
        this.currentSearch.subscribe((state: CurrentSearch) => {
            this.state = state;
            if (state && state.name && state.name.length > 0) {
                this.disableSearch = false;
                this.errorEmptySearch = false;
                this.youtube.search(state);
            } else {
                this.disableSearch = true;
                this.errorEmptySearch = true;
                this.searchResults = [];
            }

            if (state && state['error']) {
                this.errorLocation = true;
                this.errorLocationMessage = state['error'];
            } else {
                this.errorLocation = false;
            }
        });
    }
}
