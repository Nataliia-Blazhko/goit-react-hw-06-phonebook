import { Component } from 'react';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts
          .filter(item =>
            item.name.toLowerCase().includes(this.props.filter.toLowerCase()),
          )
          .map(item => (
            <ContactListItem key={item.id} {...item} />
          ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.phonebook.contacts,
    filter: state.phonebook.filter,
  };
};

export default connect(mapStateToProps)(ContactList);

ContactList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  deleteContact: PropTypes.func,
};
