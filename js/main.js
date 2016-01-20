import React from 'react';
import ReactDom from 'react-dom';

// components
import Category from './category/category';
import SubCategory from './sub-category/sub-category';
import Cause from './cause/cause';

// helpers
import helpers from './helpers';

const App = React.createClass({

  getInitialState() {
    let categories = JSON.parse(helpers.getLocalStore('categories')) || [];

    return {
      categories: categories,
      selectedCategory: null
    }
  },

  addCategory(category) {
    let categories = this.state.categories.slice();
    categories.push(category);

    this.setState({ categories: categories });

    helpers.setLocalStore('categories', JSON.stringify(categories));
  },

  selectCategory(obj) {
    let selectedCategory = this.state.selectedCategory;
    selectedCategory = obj;

    this.setState({ selectedCategory: selectedCategory });
  },

  render() {

    let categories = this.state.categories,
        selectedCategory = this.state.selectedCategory;

    return (
      <div className='container'>
        <Category categories={categories} addCategory={this.addCategory} selectCategory={this.selectCategory}  />
        <SubCategory selectedCategory={selectedCategory} />
        <Cause />
      </div>
    )
  }

});

ReactDom.render(<App />, document.querySelector('#app'));
