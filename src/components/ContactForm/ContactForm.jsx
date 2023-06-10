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
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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
  contacts: PropTypes.array,
  addContact: PropTypes.func,
};