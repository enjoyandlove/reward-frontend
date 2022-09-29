import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main/Main';
import PersonalRewards from './views/PersonalRewards/PersonalRewards';

const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/personalrewards' element={<PersonalRewards />}></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
