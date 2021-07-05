import { Component } from "react";
import PropTypes from "prop-types";

export class Filter extends Component {
  render() {
    return (
      <div>
        <p className="text">Find contacts by name</p>
        <input
          value={this.props.filter}
          onChange={this.props.handleFilter}
          type="text"
        />
      </div>
    );
  }
}
Filter.propTypes = { filter: PropTypes.string, handleFilter: PropTypes.func };

export default Filter;
