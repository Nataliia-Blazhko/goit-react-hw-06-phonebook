import { Component } from "react";
import PropTypes from "prop-types";

export class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clearForm = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <div className="container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.addContact(this.state);
            this.clearForm();
          }}
        >
          <label htmlFor="name" className="subtitle">
            Name
          </label>
          <input
            onChange={this.handleInput}
            value={this.state.name}
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <label htmlFor="number" className="subtitle">
            Number
          </label>
          <input
            onChange={this.handleInput}
            value={this.state.number}
            id="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
          <button className="addContact">Add contact</button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = { addContact: PropTypes.func };
