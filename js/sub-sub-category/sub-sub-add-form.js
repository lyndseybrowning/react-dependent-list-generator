import React from 'react';
import Uid from 'uuid-lib';

export default React.createClass({

  addSubSubCategory(e) {
    e.preventDefault();

    let subSubCategory = this.refs.subSubCategory;

    if(subSubCategory.value === '') {
       subSubCategory.classList.add('error');
       return;
    }
    subSubCategory.classList.remove('error');

    let newItem = {
      id: Uid.raw(),
      subSubCategory: subSubCategory.value,
      subCategoryId: this.props.selectedSubCategory.id
    };

    this.props.addSubSubCategory(newItem);
    this.refs.frmSub.reset();
  },

  render() {
    return (
      <form onSubmit={this.addSubSubCategory} ref='frmSub' data-ref='frmSubSubCategory' data-hidden>
        <input type='text' ref='subSubCategory' />
      </form>
    )
  }
});
