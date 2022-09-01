import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faClipboardCheck, faHouse, faLightbulb, faQuoteLeft, faQuoteRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavList from './components/navlist';
import FooterList from './components/FooterList';
import Home from './pages/home';
import Tasks from './pages/tasks';

function App() {
  library.add(faClipboardCheck, faHouse, faLightbulb, faQuoteLeft, faQuoteRight, faPlus)
  return (
    <>
      <Router>
        <NavList />
        <Routes>
          <Route element={< Home />} exact path='/'></Route>
          <Route element={< Tasks />} exact path='/tasks'></Route>
        </Routes>
        <FooterList />
      </Router>
    </>
  );
}

export default App;
