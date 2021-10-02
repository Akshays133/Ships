import { FETCH_DATA } from '../action/types';

const initialState = {
    ship: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA: 
        return {
          ...state,
          ship: action.payload
        }

      default:
        return state;
    }
};