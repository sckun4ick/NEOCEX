
import './style.scss'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Photo } from '../../photo.js';

function App() {
  return (
    <>
      <header>
        <div className="center_header">
            <Link to="/" className='image_log'><img src={Photo.logo_black} alt="" /></Link>
            <nav>
                <Link to="/project">Проекты</Link>
                <Link to="/about">О нас</Link>
                <Link to="">Услуги</Link>
                <Link to="">Цены</Link>
                <Link to="">Статьи</Link>
                <Link to="">Вакансии</Link>
                <Link to="">Контакты</Link>
                
            </nav>
            <div className="contact_call">
                <img src={Photo.phone_call} alt="" />
                <Link>+7 (495) 755-02-29</Link>
            </div>
        </div>
      </header>
    </>
  )
}

export default App