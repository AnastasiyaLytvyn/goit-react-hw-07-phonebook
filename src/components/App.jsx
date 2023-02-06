import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, TitlePhone, TitleContacts } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { RotatingLines } from 'react-loader-spinner';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <TitlePhone>Phonebook</TitlePhone>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>

      <Filter />
      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="26"
          visible={true}
        />
      )}
      <ContactList />
    </Container>
  );
}
