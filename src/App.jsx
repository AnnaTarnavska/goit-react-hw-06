import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
// import { useSelector } from "react-redux";
import "modern-normalize";
import "./App.css";
import ContactList from './components/ContactList/ContactList';

const App = () => {

  return (
    <>
      <div className='phoneBookForm'>
        <h1 className='title'>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  )
}

export default App;
