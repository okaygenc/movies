import { createSelector } from "reselect";
import { Watchable } from "../models";

// I will use this to use same state for movies and series.
// Other filters are same for movies and series but at the end
// I will filter programType
export const filterByType = createSelector(
    (state: any, type: string) => type,
    (state: any) => state.watchables.data,
    (type, watchables: Watchable[]) => {
        return watchables
            .filter(watchable => watchable.programType === type)
            .slice(0, 21);
    }
);