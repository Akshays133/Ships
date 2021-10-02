import { FETCH_DATA } from './types';
import gql from "graphql-tag";
import request from "../../utils/request";

export const searchShips = text => async dispatch => {
    try {
        const response =  await request(gql`
        {
            ships {
            name
            home_port
            image
            roles 
            id
            }
        }
        `);
        let filtData = response.data.ships.filter(ship => {
            let name = ship.name.toLowerCase()
            if (name.includes(text.toLowerCase())) return true
            return false
        })
        dispatch({
            type: FETCH_DATA,
            payload: filtData
        });
    } catch(err) {
        console.log(err);
    };

};

