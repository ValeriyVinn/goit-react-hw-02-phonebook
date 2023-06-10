import PropTypes from 'prop-types';
import css from './Contact.module.css';
export const Contact = ({ name, number, deleteContact, id }) => {
  return (
    <div className={css.contact}>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        onClick={() => deleteContact(id)}
        className={css.btnDelete}
      >
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
};