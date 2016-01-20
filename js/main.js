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
      categories: categories,
      subCategories: subCategories,
      subSubCategories: subSubCategories,
      selectedCategory: null,
      selectedSubCategory: null,
      selectedCause: null
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

  selectSubCategory(obj) {
    let selectedSubCategory = this.state.selectedSubCategory;
    selectedSubCategory = obj;

    this.setState({ selectedSubCategory: selectedSubCategory });
  },

  addSubSubCategory(subSubCategory) {
    let subSubCategories = this.state.subSubCategories.slice();
    subSubCategories.push(subSubCategory);

    this.setState({ subSubCategories: subSubCategories });

    helpers.setLocalStore('subSubCategories', JSON.stringify(subSubCategories));
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
          addCategory={this.addCategory}
          selectCategory={this.selectCategory}
          resetSub={this.resetSub} />

        <SubCategory
          subCategories={subCategories}
          selectedCategory={selectedCategory}
          addSubCategory={this.addSubCategory}
          selectSubCategory={this.selectSubCategory} />

        <SubSubCategory
          subSubCategories={subSubCategories}
          selectedSubCategory={selectedSubCategory}
          addSubSubCategory={this.addSubSubCategory} />

      </div>
    )
  }

});

ReactDom.render(<App />, document.querySelector('#app'));
