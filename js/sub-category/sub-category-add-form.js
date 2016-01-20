import React from 'react';
import Uid from 'uuid-lib';

export default React.createClass({

  addSubCategory(e) {
    e.preventDefault();

    let categoryName = this.refs.categoryName;

    if(categoryName.value === '') {
       categoryName.classList.add('error');
       return;
    }
    categoryName.classList.remove('error');

    let newCategory = {
      id: Uid.raw(),
      subCategory: categoryName.value,
      categoryId: this.props.selectedCategory.id
    };

    this.props.addSubCategory(newCategory);
    this.refs.frmSubCategory.reset();
  },

  render() {
    return (
      <form onSubmit={this.addSubCategory} ref='frmSubCategory'>
        <input type='text' ref='categoryName' />
        <input type='submit' defaultValue='Add' />
      </form>
    )
  }
});
