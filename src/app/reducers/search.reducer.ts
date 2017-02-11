import {ActionReducer, Action} from '@ngrx/store';
import {CurrentSearch} from '../models/search-query.model';
import {SearchBoxComponent} from '../components/search-box/search-box.component';
import {ProximitySelectorComponent} from '../components/proximity-selector/proximity-selector.component';

export const SearchReducer: ActionReducer<CurrentSearch> =
    (state: CurrentSearch, action: Action) => {
        switch (action.type) {
            case SearchBoxComponent.StoreEvents.text:
                return Object.assign({}, state, {
                    name: action.payload.text
                });
            case ProximitySelectorComponent.StoreEvents.position:
                return Object.assign({}, state, {
                    location: {
                        latitude: action.payload.position.latitude,
                        longitude: action.payload.position.longitude
                    }
                });
            case ProximitySelectorComponent.StoreEvents.off:
                return Object.assign({}, state, {
                    location: null
                });
            case ProximitySelectorComponent.StoreEvents.radius:
                return Object.assign({}, state, {
                    radius: action.payload.radius
                });

            default:
                return state;
        }
    };