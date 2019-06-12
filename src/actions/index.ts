import axios from '../api/index';
import { FETCH_DATA } from "./types";

export const fetchData = () => async (dispatch: any) => {
    const response = await axios.get('/sample.json');
    dispatch({ type: FETCH_DATA, payload: response.data });
};