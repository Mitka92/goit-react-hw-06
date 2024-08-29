import { IoIosContact } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa6';
import { IconContext } from 'react-icons';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.contact}>
      <span className={css.info}>
        <span className={css.name}>
          <IconContext.Provider
            value={{ color: 'blue', className: [css.icon] }}
          >
            <IoIosContact />
          </IconContext.Provider>
          <b>{name}</b>
        </span>
        <span className={css.number}>
          <a href={`tel:${number}`}>
            <IconContext.Provider
              value={{ color: 'blue', className: [css.icon] }}
            >
              <FaPhone />
            </IconContext.Provider>
            {number}
          </a>
        </span>
      </span>
      <button
        type="button"
        className={css.btn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
