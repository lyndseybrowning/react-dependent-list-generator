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
    let categories = JSON.parse(helpers.getLocalStore('categories')) || [],
        subCategories = JSON.parse(helpers.getLocalStore('subCategories')) || [];

    return {
      categories: categories,
      selectedCategory: null,
      subCategories: subCategories
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

  addSubCategory(subCategory) {
    let subCategories = this.state.subCategories.slice();
    subCategories.push(subCategory);

    this.setState({ subCategories: subCategories });

    helpers.setLocalStore('subCategories', JSON.stringify(subCategories));
  },

  render() {

    let categories = this.state.categories,
        selectedCategory = this.state.selectedCategory,
        subCategories = this.state.subCategories;

    return (
      <div className='container'>
        <Category categories={categories} addCategory={this.addCategory} selectCategory={this.selectCategory}  />
        <SubCategory subCategories={subCategories} selectedCategory={selectedCategory} addSubCategory={this.addSubCategory} />
        <Cause />
      </div>
    )
  }

});

ReactDom.render(<App />, document.querySelector('#app'));
