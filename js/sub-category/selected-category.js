import React from 'react';

export default React.createClass({

  render() {
     let selectedCategory = this.props.selected;

     return (
      <div className="selected-item">
        Selected: {selectedCategory.category}
        <span className="selected-item__cancel">x</span>
      </div>
     )
  }

});
