import React from 'react';
import SelectedCategory from './selected-category';
import AddSubCategoryForm from './sub-category-add-form';
import helpers from '../helpers';

const componentTitle = 'Sub-Category';

export default React.createClass({

  noCategorySelectedHtml() {
    return <span> Select a Category </span>
  },

  noSubCategories() {
    return <span> No Sub-Categories added </span>
  },

  renderSubCategories(obj) {
    return (
      <li key={obj.id} className='list__item' ref={obj.id} onClick={this.handleClick.bind(this, obj)}>
        <span>{obj.subCategory}</span>
      </li>
    )
  },

  handleClick(obj) {
    let item = this.refs[obj.id],
        parentList = item.parentNode,
        parentListItems = parentList.querySelectorAll('.list__item');

    // remove any selected class
    helpers.removeClass(parentListItems, 'list__item--selected');
    // add selected class to this item
    item.classList.add('list__item--selected');
    this.props.selectSubCategory(obj);    
  },

  render() {
    let categories = this.props.categories,
        selectedCategory = this.props.selectedCategory,
        hasSelectedCategory = (selectedCategory == null) ? false : true,
        subCategories = this.props.subCategories,
        filteredSubCategories = subCategories.filter((obj) => (hasSelectedCategory) ? obj.categoryId == selectedCategory.id : null);

    return (
      <section className='grid-4'>
         <h1> {componentTitle} </h1>

         { (hasSelectedCategory)
           ? <div>
                <SelectedCategory selected={selectedCategory} categories={categories} />
                <AddSubCategoryForm {...this.props} />

                <ul className='list list--categories'>
                  {
                    (filteredSubCategories.length)
                    ? filteredSubCategories.map(this.renderSubCategories)
                    : this.noSubCategories()
                  }
                </ul>

             </div>
           : this.noCategorySelectedHtml()
         }
      </section>
    )
  }
});
