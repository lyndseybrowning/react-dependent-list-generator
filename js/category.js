import React from 'react';
import AddCategoryForm from './categoryAddForm';
import helpers from './helpers';

export default React.createClass({

  renderCategories(value, key) {
    return (
        <li key={key} className='list__item'>
          <span>{value}</span>          
        </li>
    )
  },

  render() {
    var categories = this.props.categories;

    categories.sort(helpers.sortAlpha);

    return (
      <div className='grid-4'>
        <AddCategoryForm  {...this.props} />

        <ul className='list'>
          { categories.map(this.renderCategories) }
        </ul>
      </div>
    )
  }
});
