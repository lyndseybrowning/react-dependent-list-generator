import React from 'react';
import SelectedSubSub from './selected-sub';
import AddSubSubForm from './sub-sub-add-form';
import helpers from '../helpers';

const componentTitle = 'Sub-Sub-Category';

export default React.createClass({

  noCategorySelectedHtml() {
    return <span> Select a Sub-Category </span>
  },

  noItems() {
    return <span> No items added </span>
  },

  toggleItem(target) {
    let source = this.refs.toggle;
    this.props.toggleItem(source, target);
  },

  renderCategories(obj) {
    return (
      <li key={obj.id} className='list__item'>
        <span>{obj.subSubCategory}</span>
      </li>
    )
  },

  render() {

    let subSubCategories = this.props.subSubCategories,
        selectedSubCategory = this.props.selectedSubCategory,
        hasSelectedSubCategory = (selectedSubCategory == null) ? false : true,
        filteredCategories = subSubCategories.filter((obj) => (hasSelectedSubCategory) ? obj.subCategoryId == selectedSubCategory.id : null);

    if(filteredCategories.length) {
      filteredCategories.sort(helpers.sortAlphaObj.bind(this, 'subSubCategory'));
    }

    return (
      <section className='grid-4'>
        <div className='grid__content'>
          <div className='cf'>
            <div className='grid-10'>
              <h1> {componentTitle} </h1>
            </div>
            { (hasSelectedSubCategory)
              ? <div className='grid-2'>
                  <button ref='toggle' onClick={this.toggleItem.bind(this, 'frmSubSubCategory')}> + </button>
                </div>
              : null
            }
          </div>

          { (hasSelectedSubCategory)
            ? <div>
                 <SelectedSubSub selected={selectedSubCategory} subSubCategories={subSubCategories} />
                 <AddSubSubForm {...this.props} />

                 <ul className='list list--categories'>
                   {
                     (filteredCategories.length)
                     ? filteredCategories.map(this.renderCategories)
                     : this.noItems()
                   }
                 </ul>

              </div>
            : this.noCategorySelectedHtml()
          }
        </div>
      </section>
    )
  }
});
