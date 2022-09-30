import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main/Main';
import RewardsMain from './pages/rewardsMain';

<<<<<<< HEAD
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
=======
import ConnectWallet from './pages/connectWallet';
import ServeiceProviders from './pages/serveiceProviders';
import ForProjects from './pages/forProjects';
import Sponsorship from './pages/sponsorship';
import LastWinners from './pages/lastWinners';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/rewards/*' element={<RewardsMain />}></Route>
				<Route path='/connect-wallet' element={<ConnectWallet />}></Route>
				<Route path='/serveice-providers' element={<ServeiceProviders />}></Route>
				<Route path='/for-projects' element={<ForProjects />}></Route>
				<Route path='/sponsorship' element={<Sponsorship />}></Route>
				<Route path='/lastWinners' element={<LastWinners />}></Route>
			</Routes>
		</BrowserRouter>
	);
>>>>>>> origin/reward_UI
}

export default App;
