import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faClipboardCheck, faHouse, faLightbulb, faQuoteLeft, faQuoteRight, faPlus, faUser, faLock, faHandHoldingHeart, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

import NavList from './components/navlist';
import FooterList from './components/FooterList';
import Home from './pages/home';
import Tasks from './pages/tasks';
import Login from './pages/login';
import Light from './pages/light';
import BlogBody from './pages/BlogBody/BlogBody';

const TRACKING_ID = "UA-240304354-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  library.add(faClipboardCheck, faHouse, faLightbulb, faQuoteLeft, faQuoteRight, faPlus, faUser, faLock, faHandHoldingHeart, faArrowRightFromBracket)

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <>
      <Router>
        <NavList />
        <Routes>
          <Route element={< Login />} exact path='/'></Route>
          <Route element={< Home />} path='/home'></Route>
          <Route element={< Tasks />} path='/tasks'></Route>
          <Route element={< Light />} path='/light'></Route>
          <Route element={<BlogBody />} path='/blogs/:id'></Route>
        </Routes>
        <FooterList />
      </Router>
    </>
  );
}

export default App;
