import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Page/Home/Home';
import Like from './Page/Like/Like';
import Personal from './Page/Personal account/Personal';
import Settings from './Page/Settings page/Settings';
import Card from './Page/Card/Card';
import Search from './Page/Search/Search';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function App() { 
  return (
    <Router>
      <header className='urlConteiner'>
        <p className='Home'><Link to={'/'}>дом</Link></p>
        <p className='Like'><Link to={'/Like'}>понравилось</Link></p>
        <p className='Personal'><Link to={'/personal-account'}>личный кабинет</Link></p>
        <p className='Setting'><Link to={'/settings'}>настройки</Link></p>
        <p className='Card'><Link to={'/card'}><FontAwesomeIcon icon={faCartShopping} className="CardIcon"/></Link></p>
        <p className='Search'><Link to='/search'><FontAwesomeIcon icon={faMagnifyingGlass} className='SearchIcon' /></Link></p>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Like" element={<Like />} />
        <Route path="/personal-account" element={<Personal />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/card" element={<Card />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;


