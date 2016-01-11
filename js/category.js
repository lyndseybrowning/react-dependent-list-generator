import React from 'react';

export default React.createClass({

  renderCategories(key, value) {
    return <li key={key}> {this.props.categories[key]} </li>
  },

  render() {
    var categories = this.props.categories;

    return (
      <div className='grid-4'>
        <input type='text' />
        <input type='button' defaultValue='Add' />

        <ul className='list'>
          { Object.keys(categories).map(this.renderCategories) }
        </ul>
      </div>
    )
  }
});
