import { useState } from 'react';
import style from './Form.module.css';
import shortid from 'shortid';

export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor={nameInputId}>
        <p>Name</p>
        <input
          value={name}
          onChange={handleChange}
          id={nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label htmlFor={numberInputId}>
        <p>Number</p>

        <input
          value={number}
          onChange={handleChange}
          id={numberInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <button type="submit" className={style.button}>
        Add contact
      </button>
    </form>
  );
}

// class OldForm extends Component {
//     state = {
//         name: '',
//     number: ''
//     }

//     nameInputId = shortid.generate();
//     numberInputId = shortid.generate();

//      handleChange = event => {
//     const { name, value } = event.currentTarget;

//     this.setState({
//       [name]: value,
//     });
//   };

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.onSubmit(this.state);
//         this.reset();
//     };

//     reset = () => {
//         this.setState({
//             name: '',
//             number: ''
//         })
//     };

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit} className={style.form}>
//           <label htmlFor={this.nameInputId}>
//             <p>Name</p>
//         <input
//           value={this.state.name}
//                         onChange={this.handleChange}
//                         id={this.nameInputId}
//   type="text"
//   name="name"
//   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//   title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//   required
//         />
//           </label>

//           <label htmlFor={this.numberInputId}>

//         <p>Number</p>

//             <input
//               value={this.state.number}
//                         onChange={this.handleChange}
//                         id={this.numberInputId}
//   type="tel"
//   name="number"
//   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//   title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//   required
// />
//           </label>

//            <button type="submit" className={style.button}>Add contact</button>
//         </form>
//         );
//     }
// }
