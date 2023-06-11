import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Filter.module.css'

export class Filter extends Component {
  render() {
    const { value, filter } = this.props;
    return (
      <div>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={filter}
          className={css.input}
        ></input>
      </div>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired,
}