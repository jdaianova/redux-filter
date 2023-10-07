import Form from './components/Form/Form';
import SearchBar from './components/SearchBar/SearchBar';
import ServiceList from './components/ServiceList/ServiceList';
import './App.css';
import { useState } from 'react';

function App() {
  const [editModeState, setEditModeState] = useState(false);

  const editModeOn = () => setEditModeState(true);
  const editModeOff = () => setEditModeState(false);

  return (
    <div className='App'>
      <Form editModeOff={editModeOff} />
      <br></br>
      <SearchBar />
      <ServiceList
        editModeState={editModeState}
        editModeOn={editModeOn}
        editModeOff={editModeOff}
      />
    </div>
  );
}

export default App;