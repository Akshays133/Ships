import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { searchShips } from '../Redux/action/shipActions';

const Ships = ({ ships: { ship }, searchShips }) => {
    const text = useRef('');
    useEffect(() => {
       searchShips('');
       // eslint-disable-next-line
    }, [(text.current.length==0)]);
    const onChange = e => {
        searchShips(text.current.value);
    }
        
    return (
      <div>
        <input 
            type = "text" 
            name = "text" 
            placeholder='Search ships......' 
            ref={text}
            onChange = {onChange} 
            className='App m-1 p-1'
        />
        <div className='text-left p m'>TOTAL COUNT : {ship.length}
        <div> {ship.map(ship =>
            <ul key ={ship.id}>
            <img className='img p m' src={ship.image} alt={ship.id} />
            <h1 className='text-left '>{ship.name}</h1>
            <p className='text-right p my'>PORT: {ship.home_port}</p>
            <p className='text-right p'>ROLES: {ship.roles}</p>
            </ul>
            )}
        </div>
        </div>
      </div>
    );
};


const mapStateToProps = state => ({
    ships: state.ships 
})

export default connect(
    mapStateToProps,
    { searchShips })
(Ships);
