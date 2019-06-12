import { FETCH_DATA, IFetchDataAction } from '../actions/types';
import { Watchable } from '../models';

interface IWatchableState {
    data: Watchable[];
    loading: boolean;
}

const initialState: IWatchableState = {
    data: [],
    loading: true
};

export default (state = initialState, action: IFetchDataAction): IWatchableState => {
    switch (action.type) {
        case FETCH_DATA:
            let data = action.payload.entries;
            
            // No matter where we use these records
            // Following filters will be same
            let filtered = data
                .filter(watcahble => watcahble.releaseYear >= 2010)
                .sort((a, b) => (a.title < b.title ? -1 : (a.title > b.title ? 1 : 0)));

            return { ...state, data: filtered, loading: false };
        default:
            return state;
    }
}