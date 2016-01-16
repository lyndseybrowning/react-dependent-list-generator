import React from 'react';
import AddCategoryForm from './category-add-form';
import CategoryItem from './category-item';
import helpers from '../helpers';

export default React.createClass({

  renderCategories(value, key) {
    return <CategoryItem key={key} value={value} />
  },

  render() {
    var categories = this.props.categories;

    categories.sort(helpers.sortAlpha);

    return (
      <section className='grid-4'>
        <h1> Category </h1>

        <AddCategoryForm  {...this.props} />

        <ul className='list'>
          { categories.map(this.renderCategories) }
        </ul>
      </section>
    )
  }
});