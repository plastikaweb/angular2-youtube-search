import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {ProximitySelectorComponent} from './components/proximity-selector/proximity-selector.component';
import {SearchReducer} from './reducers/search.reducer';
import {YoutubeService} from './services/youtube.service';

const storeManager = StoreModule.provideStore({currentSearch: SearchReducer});

@NgModule({
    declarations: [
        AppComponent,
        SearchBoxComponent,
        ProximitySelectorComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        StoreModule,
        storeManager
    ],
    providers: [YoutubeService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
