import React from "react";
import "./styles.css";
import Navbar from './pages/Navbar';
import Ships from './pages/Ships';
import { Provider } from 'react-redux';
import store from './Redux/store';


const App = () => {

  return (
    <Provider store={store}>
    <div className='App'>
      <div className='br'>
        <Navbar />
        <div className='container'>
        <Ships />
        </div>
      </div>
  </div>
  </Provider>
  );
}

export default App;
