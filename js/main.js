import React from 'react';
import ReactDom from 'react-dom';

// components
import Category from './category/category';
import SubCategory from './sub-category/sub-category';
import SubSubCategory from './sub-sub-category/sub-sub-category';

// helpers
import helpers from './helpers';

const App = React.createClass({

  getInitialState() {
    let categories = JSON.parse(helpers.getLocalStore('categories')) || [],
        subCategories = JSON.parse(helpers.getLocalStore('subCategories')) || [],
        subSubCategories = JSON.parse(helpers.getLocalStore('subSubCategories')) || [];

    return {
      categories, subCategories, subSubCategories,
      selectedCategory: null,
      selectedSubCategory: null
    }
  },

  add(item, type) {
    let items = this.state[type].slice();
    items.push(item);

    switch(type.toLowerCase()) {
      case 'categories':
        this.setState({ categories: items });
        helpers.setLocalStore('categories', JSON.stringify(items));
        break;
      case 'subcategories':
        this.setState({ subCategories: items });
        helpers.setLocalStore('subCategories', JSON.stringify(items));
        break;
      case 'subsubcategories':
        this.setState({ subSubCategories: items });
        helpers.setLocalStore('subSubCategories', JSON.stringify(items));
        break;
    }
  },

  select(item, type) {
    let state = this.state;
    let selectedCategory, selectedSubCategory;

    switch(type) {
      case 'category':
        selectedCategory = item;
        this.setState({ selectedCategory });
        break;
      case 'subcategory':
        selectedSubCategory = item;
        this.setState({ selectedSubCategory });
        break;
    }
  },

  resetSub() {
    let selectedSubCategory = null;

    this.setState({
      selectedSubCategory: selectedSubCategory
    });
  },

  render() {

    let categories = this.state.categories,
        selectedCategory = this.state.selectedCategory,
        subCategories = this.state.subCategories,
        selectedSubCategory = this.state.selectedSubCategory,
        subSubCategories = this.state.subSubCategories;

    return (
      <div>

        <Category
          categories={categories}
          add={this.add}
          select={this.select}
          resetSub={this.resetSub}
          />

        <SubCategory
          subCategories={subCategories}
          select={this.select}
          add={this.add}
          selectedCategory={selectedCategory}
          />

        <SubSubCategory
          subSubCategories={subSubCategories}
          selectedSubCategory={selectedSubCategory}
          add={this.add}
          />

      </div>
    )
  }

});

ReactDom.render(<App />, document.querySelector('#app'));
