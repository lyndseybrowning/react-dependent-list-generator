import React from 'react';
import SelectedCategory from './selected-category';
import AddSubCategoryForm from './sub-category-add-form';

export default React.createClass({

  noCategorySelectedHtml() {
    return <span> Select a Category </span>
  },

  render() {
    let categories = this.props.categories,
        selectedCategory = this.props.selectedCategory,
        hasSelectedCategory = (selectedCategory == null) ? false : true;

    return (
      <section className='grid-4'>
         <h1> Sub-Category </h1>

         { (hasSelectedCategory)
           ? <div>
                <SelectedCategory selected={selectedCategory} categories={categories} />
                <AddSubCategoryForm  {...this.props} />
             </div>
           : this.noCategorySelectedHtml()
         }
      </section>
    )
  }
});
