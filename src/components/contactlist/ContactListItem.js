import { Component } from "react";
import PropTypes from "prop-types";

export class ContactListItem extends Component {
  render() {
    const { name, number, id, deleteContact } = this.props;
    return (
      <li className="person">
        {name} {number}
        <button
          className="deleteButton"
          onClick={() => deleteContact(id)}
          type="button"
        >
          Delete
        </button>
      </li>
    );
  }
}
ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  deleteContact: PropTypes.func,
};
