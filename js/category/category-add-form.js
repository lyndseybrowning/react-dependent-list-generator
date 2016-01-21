import React from 'react';
import Uid from 'uuid-lib';

export default React.createClass({

  addCategory(e) {
    e.preventDefault();

    let categoryName = this.refs.categoryName;

    if(categoryName.value === '') {
       categoryName.classList.add('error');
       return;
    }
    categoryName.classList.remove('error');

    let newCategory = {
      id: Uid.raw(),
      category: categoryName.value
    };

    this.props.addCategory(newCategory);
    this.refs.frmCategory.reset();
  },

  render() {
    return (
      <form onSubmit={this.addCategory} ref='frmCategory' data-hidden data-ref='frmCategory'>
        <input type='text' ref='categoryName' />
      </form>
    )
  }
});
