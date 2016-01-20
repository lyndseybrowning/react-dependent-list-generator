import React from 'react';
import SelectedCause from './selected-cause';
import AddCauseForm from './cause-add-form';

const componentTitle = 'Cause';

export default React.createClass({

  noCategorySelectedHtml() {
    return <span> Select a Sub-Category </span>
  },

  noCauses() {
    return <span> No Causes added </span>
  },

  renderCauses(obj) {
    return (
      <li key={obj.id} className='list__item'>
        <span>{obj.cause}</span>
      </li>
    )
  },

  render() {

    let causes = this.props.causes,
        selectedSubCategory = this.props.selectedSubCategory,
        hasSelectedSubCategory = (selectedSubCategory == null) ? false : true,
        filteredCauses = causes.filter((obj) => (hasSelectedSubCategory) ? obj.subCategoryId == selectedSubCategory.id : null);

    return (
      <section className='grid-4'>
        <h1> {componentTitle} </h1>

        { (hasSelectedSubCategory)
          ? <div>
               <SelectedCause selected={selectedSubCategory} causes={causes} />
               <AddCauseForm {...this.props} />

               <ul className='list list--categories'>
                 {
                   (filteredCauses.length)
                   ? filteredCauses.map(this.renderCauses)
                   : this.noCauses()
                 }
               </ul>

            </div>
          : this.noCategorySelectedHtml()
        }


      </section>
    )
  }
});
