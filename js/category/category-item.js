import React from 'react';

export default React.createClass({

  handleClick(key) {
    console.log('clicked: ' + key);
  },

  render() {
    var key = this.props.key,
        value = this.props.value;

        console.log(key, value);

    return (
      <li key={key} className='list__item' onClick={this.handleClick.bind(this, key)}>
        <span>{value}</span>
      </li>
    )
  }

});
