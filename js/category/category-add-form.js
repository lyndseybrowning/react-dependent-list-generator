import React from 'react';
import Uid from 'uuid-lib';

export default React.createClass({

  addCategory(e) {
    e.preventDefault();

    let newCategory = {
      id: Uid.raw(),
      category: this.refs.categoryName.value
    };

    this.props.addCategory(newCategory);
    this.refs.frmCategory.reset();
  },

  render() {
    return (
      <form onSubmit={this.addCategory} ref='frmCategory'>
        <input type='text' ref='categoryName' />
        <input type='submit' defaultValue='Add' />
      </form>
    )
  }
});
