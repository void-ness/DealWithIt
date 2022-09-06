import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faClipboardCheck, faHouse, faLightbulb, faQuoteLeft, faQuoteRight, faPlus, faUser, faLock, faHandHoldingHeart, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavList from './components/navlist';
import FooterList from './components/FooterList';
import Home from './pages/home';
import Tasks from './pages/tasks';
import Login from './pages/login';
import Light from './pages/light';
import BlogBody from './pages/BlogBody/BlogBody';

function App() {
  library.add(faClipboardCheck, faHouse, faLightbulb, faQuoteLeft, faQuoteRight, faPlus, faUser, faLock, faHandHoldingHeart, faArrowRightFromBracket)

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
