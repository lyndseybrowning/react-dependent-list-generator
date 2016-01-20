import React from 'react';
import AddCategoryForm from './category-add-form';
import helpers from '../helpers';

export default React.createClass({

  handleClick(obj) {
    let item = this.refs[obj.id],
        parentList = item.parentNode,
        parentListItems = parentList.querySelectorAll('.list__item');

    // remove any selected class
    helpers.removeClass(parentListItems, 'list__item--selected');
    // add selected class to this item
    item.classList.add('list__item--selected');
    this.props.selectCategory(obj);
  },

  renderCategories(obj) {
    return (
      <li key={obj.id} className='list__item' ref={obj.id} onClick={this.handleClick.bind(this, obj)}>
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

        <ul className='list list--categories'>
          {categories.map(this.renderCategories)}
        </ul>
      </section>
    )
  }
});
