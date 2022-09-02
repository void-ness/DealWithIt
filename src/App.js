import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faClipboardCheck, faHouse, faLightbulb, faQuoteLeft, faQuoteRight, faPlus, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavList from './components/navlist';
import FooterList from './components/FooterList';
import Home from './pages/home';
import Tasks from './pages/tasks';
import Login from './pages/login';

function App() {
  library.add(faClipboardCheck, faHouse, faLightbulb, faQuoteLeft, faQuoteRight, faPlus, faUser, faLock)
  return (
    <>
      <Router>
        <NavList />
        <Routes>
          <Route element={< Login />} exact path='/'></Route>
          <Route element={< Home />} exact path='/home'></Route>
          <Route element={< Tasks />} exact path='/tasks'></Route>
        </Routes>
        <FooterList />
      </Router>
    </>
  );
}

export default App;
