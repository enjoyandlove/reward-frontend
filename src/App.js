import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main/Main';
// import PersonalRewards from './views/PersonalRewards/PersonalRewards';
import RewardsMain from './pages/rewardsMain';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/rewards/*' element={<RewardsMain />}></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
