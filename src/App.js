import PhonebookInput from './components/PhonebookInput/PhonebookInput';
import Filter from './components/Filter/Filter';
import ContactList from './components/Contacts/ContactList';

const App = () => {
  return (
    <div>
        <h1>Phonebook</h1>
        <PhonebookInput />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
  );
}

export default App;
