import React from 'react';
import ReactDom from 'react-dom';

// components
import Category from './category/category';
import SubCategory from './sub-category/sub-category';
import Cause from './cause/cause';

const App = React.createClass({

  getInitialState() {
    return {
      categories: []
    }
  },

  addCategory(category) {
    let categories = this.state.categories.slice();
    categories.push(category);

    this.setState({
      categories: categories
    });
  },

  render() {

    var categories = this.state.categories;

    return (
      <div className='container'>
        <Category categories={categories} addCategory={this.addCategory} />
        <SubCategory />
        <Cause />
      </div>
    )
  }

});

ReactDom.render(<App />, document.querySelector('#app'));
