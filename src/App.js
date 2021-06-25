import React from 'react';
import './App.css';
import EnhancedComponent from './HigherOrder';

class App extends React.Component {
  render() {

    //Destructuring the props

    const { show, handleclick } = this.props;

    //Calling out the props
    return <button onClick={handleclick}>{show}</button>

  }
}

export default EnhancedComponent(App);
