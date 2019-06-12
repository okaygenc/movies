import { Watchable } from "../models";

export const FETCH_DATA = 'FETCH_DATA';

export interface IFetchDataAction {
    type: string;
    payload: {
        entries: Watchable[]
    }
}