import { Component } from "react";
import { ContactForm } from "./components/contactform/ContactForm";
import { ContactList } from "./components/contactlist/ContactList";
import { Filter } from "./components/filter/Filter";
import "./styles.scss";
import { v4 as uuid } from "uuid";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (contact) => {
    contact.id = uuid();
    if (this.state.contacts.find((person) => person.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    if (
      this.state.contacts.find((person) => person.number === contact.number)
    ) {
      alert(`${contact.number} is already in contacts`);
      return;
    }
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  deleteContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      };
    });
  };

  handleFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} handleFilter={this.handleFilter} />
        <ContactList
          filter={this.state.filter}
          list={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
