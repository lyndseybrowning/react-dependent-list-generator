import React from 'react';

export default React.createClass({

  render() {
     let selectedCause = this.props.selected;

     return (
      <div className="selected-item">
        Selected: {selectedCause.subCategory}
        <span className="selected-item__cancel">x</span>
      </div>
     )
  }

});
