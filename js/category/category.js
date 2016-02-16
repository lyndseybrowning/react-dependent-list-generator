import React from 'react';
import AddCategoryForm from './category-add-form';
import helpers from '../helpers';

const componentTitle = 'Categories';

export default React.createClass({

  handleClick(obj) {
    let item = this.refs[obj.id],
        parentList = item.parentNode,
        parentListItems = parentList.querySelectorAll('.list__item');

    // remove any selected class
    helpers.removeClass(parentListItems, 'list__item--selected');
    // add selected class to this item
    item.classList.add('list__item--selected');
    this.props.select(obj, 'category');
    this.props.resetSub();
  },

  renderCategories(obj) {
    return (
      <li key={obj.id} className='list__item' ref={obj.id} onClick={this.handleClick.bind(this, obj)}>
        <span>{obj.category}</span>
      </li>
    )
  },

  toggleItem(target) {
    let source = this.refs.toggle;
    helpers.toggleItem(source, target);
  },

  render() {
    let categories = this.props.categories;

    categories.sort(helpers.sortAlphaObj.bind(this, 'category'));

    return (
      <section className='grid-4'>
        <div className='grid__content'>
          <div className='cf'>
            <div className='grid-10'>
              <h1> {componentTitle} </h1>
            </div>
            <div className='grid-2'>
              <button ref='toggle' onClick={this.toggleItem.bind(this, 'frmCategory')}> + </button>
            </div>
          </div>

          <AddCategoryForm  {...this.props} />

          <ul className='list list--categories'>
          {categories.map(this.renderCategories)}
          </ul>
        </div>
      </section>
    )
  }
});
