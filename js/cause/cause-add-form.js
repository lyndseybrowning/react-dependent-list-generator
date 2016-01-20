import React from 'react';
import Uid from 'uuid-lib';

export default React.createClass({

  addSubCategory(e) {
    e.preventDefault();

    let cause = this.refs.cause;

    if(cause.value === '') {
       cause.classList.add('error');
       return;
    }
    cause.classList.remove('error');

    let newItem = {
      id: Uid.raw(),
      cause: cause.value,
      subCategoryId: this.props.selectedSubCategory.id
    };

    this.props.addCause(newItem);
    this.refs.frmCause.reset();
  },

  render() {
    return (
      <form onSubmit={this.addSubCategory} ref='frmCause'>
        <input type='text' ref='cause' />
        <input type='submit' defaultValue='Add' />
      </form>
    )
  }
});
