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
        subCategories = JSON.parse(helpers.getLocalStore('subCategories')) || [],
        causes = JSON.parse(helpers.getLocalStore('causes')) || [];

    return {
      categories: categories,
      subCategories: subCategories,
      causes: causes,
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

  addCause(cause) {
    let causes = this.state.causes.slice();
    causes.push(cause);

    this.setState({ causes: causes });

    helpers.setLocalStore('causes', JSON.stringify(causes));
  },

  resetCause() {
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
        causes = this.state.causes;

    return (
      <div className='container'>

        <Category
          categories={categories}
          addCategory={this.addCategory}
          selectCategory={this.selectCategory}
          resetCause={this.resetCause} />

        <SubCategory
          subCategories={subCategories}
          selectedCategory={selectedCategory}
          addSubCategory={this.addSubCategory}
          selectSubCategory={this.selectSubCategory} />

        <Cause
          causes={causes}
          selectedSubCategory={selectedSubCategory}
          addCause={this.addCause} />

      </div>
    )
  }

});

ReactDom.render(<App />, document.querySelector('#app'));
