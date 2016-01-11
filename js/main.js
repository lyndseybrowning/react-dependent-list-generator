import React from 'react';
import ReactDom from 'react-dom';

// components
import Category from './category';
import SubCategory from './sub-category';
import Cause from './cause';

var App = React.createClass({

  getInitialState() {
    return {
      categories: {
        1: 'Hello World',
        2: 'Hello Lyndsey',
        3: 'My name is Lyndsey'
      }
    }
  },

  render() {

    var categories = this.state.categories;

    return (
      <div className='container'>
        <Category categories={categories} />
        <SubCategory />
        <Cause />
      </div>
    )
  }

});

ReactDom.render(<App name='Lyndsey Browning' />, document.querySelector('#app'));
