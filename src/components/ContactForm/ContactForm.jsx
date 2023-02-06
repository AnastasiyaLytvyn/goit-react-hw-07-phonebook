import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { Button, Form, Input, Label } from './ContactForm.styled';
import toast, { Toaster } from 'react-hot-toast';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      toast.error(`${name} is already in contacts`, {
        style: {
          border: '1px solid #c33838',
          color: '#c33838',
          width: '275px',
          fontSize: '14px',
        },
        iconTheme: {
          primary: '#c33838',
          secondary: '#FFFAEE',
        },
        duration: 3000,
      });
      return;
    }
    dispatch(addContact({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </Label>
      <Label htmlFor="number">
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </Label>

      <Button type="submit">Add contact</Button>
      <Toaster position="top-right" reverseOrder={false} />
    </Form>
  );
};
