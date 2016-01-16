import React from 'react';

export default React.createClass({

  addCategory(e) {
    e.preventDefault();

    this.props.addCategory(this.refs.categoryName.value);
    this.refs.frmAddCategory.reset();
  },

  render() {
    return (
      <form onSubmit={this.addCategory} ref='frmAddCategory'>
        <input type='text' ref='categoryName' />
        <input type='submit' defaultValue='Add' />
      </form>
    )
  }
});
