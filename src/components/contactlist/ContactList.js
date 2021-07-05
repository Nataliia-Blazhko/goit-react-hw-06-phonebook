import { Component } from "react";
import { ContactListItem } from "./ContactListItem";
import PropTypes from "prop-types";

export class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.list
          .filter((item) =>
            item.name.toLowerCase().includes(this.props.filter.toLowerCase())
          )
          .map((item) => (
            <ContactListItem
              key={item.id}
              {...item}
              deleteContact={this.props.deleteContact}
            />
          ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  deleteContact: PropTypes.func,
};
