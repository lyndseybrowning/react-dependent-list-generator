import React from 'react';
import AddCategoryForm from './categoryAddForm'

export default React.createClass({

  renderCategories(key, value) {
    return (
        <li key={key}> {this.props.categories[key]} </li>
    )
  },

  render() {
    var categories = this.props.categories;

    return (
      <div className='grid-4'>
        <AddCategoryForm  {...this.props} />

        <ul className='list'>
          { Object.keys(categories).map(this.renderCategories) }
        </ul>
      </div>
    )
  }
});
