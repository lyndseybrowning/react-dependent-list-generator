import React from 'react';

let AddCategoryForm = React.createClass({

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

export default React.createClass({

  renderCategories(key, value) {
    return (
        <li key={key}> {this.props.categories[key]} </li>
    )
  },

  render() {
    var categories = this.props.categories;

    return (
      <div className='grid-4'>
        <AddCategoryForm  {...this.props} />

        <ul className='list'>
          { Object.keys(categories).map(this.renderCategories) }
        </ul>
      </div>
    )
  }
});
