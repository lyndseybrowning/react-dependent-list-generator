import React from 'react';
import AddCategoryForm from './category-add-form';
import helpers from '../helpers';

export default React.createClass({

  handleClick() {

  },

  renderCategories(obj) {
    return (
      <li key={obj.id} className='list__item' onClick={this.handleClick.bind(this, obj)}>
        <span>{obj.category}</span>
      </li>
    )
  },

  render() {
    let categories = this.props.categories;

    categories.sort(helpers.sortAlphaObj.bind(this, 'category'));

    return (
      <section className='grid-4'>
        <h1> Category </h1>
        <AddCategoryForm  {...this.props} />

        <ul className='list'>
          {categories.map(this.renderCategories)}
        </ul>
      </section>
    )
  }
});
