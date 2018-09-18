import { RECEIVED_DATA, REQUESTED_DATA} from '../constants'
import axios from 'axios';

export const getDrinks = () => dispatch => {
    dispatch({type: REQUESTED_DATA});

    axios.get ('https://dog.ceo/api/breeds/image/random')
    .then (res => {
        dispatch({ type: RECEIVED_DATA, data: res.data.message})
    });
}