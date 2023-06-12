import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    this.props.contacts.find(contact => contact.name === name)
      ? alert(`${this.state.name} is already in contacts`)
      : this.props.addContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const nameInputId = nanoid();
    const numberImputId = nanoid();
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <div className={css.nameInput}>
            <label htmlFor={nameInputId} className={css.label}>
              Name
            </label>
            <input
              id={nameInputId}
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Z\s]+$"
              title="Name may contain only latin letters"
              required
              className={css.input}
            />
          </div>
          <div className={css.numberInput}>
            <label htmlFor={numberImputId} className={css.label}>
              Number
            </label>
            <input
              id={numberImputId}
              type="tel"
              name="number"
              value={number}
              onChange={this.handleInputChange}
              pattern="^\d{3}-\d{2}-\d{2}$"
              // pattern="^[0-9]+-[0-9]+-[0-9]+$"
              title="The phone number should look like this: 012-34-56"
              required
              className={css.input}
            />
          </div>

          <button type="submit" className={css.btnAddContact}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
};
