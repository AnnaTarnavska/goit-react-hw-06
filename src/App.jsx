import SearchBox from './components/SearchBox/SearchBox';
import ContactsForm from './components/ContactsForm/ContactsForm';
// import { useSelector } from "react-redux";
import "modern-normalize";
import "./App.css";
import ContactList from './components/ContactList/ContactList';

const App = () => {

  return (
    <>
      <div className='phoneBookForm'>
        <h1 className='title'>Phonebook</h1>
        <ContactsForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  )
}

export default App;
