
import './style.scss'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Photo } from '../../photo.js';

function App() {
  return (
    <>
      <footer>
        <div className="verh_footer">
            <div className="center">
                <div className="left">
                    <Link to="/" className='image_log'><img src={Photo.logo_black} alt="" /></Link>
                    <p>Инженерные изыскания в строительстве</p>
                    <div className="contact_call">
                        <img src={Photo.phone_call} alt="" />
                        <Link>+7 (495) 755-02-29</Link>
                    </div>
                </div>
                <ul>
                    <Link to="/project">Проекты</Link>
                    <Link to="/about">О нас</Link>
                    <Link to="">Услуги</Link>
                </ul>
                <ul>
                    <Link to="">Цены</Link>
                    <Link to="">Статьи</Link>
                    <Link to="">Вакансии</Link>
                </ul>
                <ul>
                    <Link to="">Контакты</Link>
                </ul>
                <div className='contact'>
                    <button><img src="" alt="" /></button>
                    <button><img src="" alt="" /></button>
                    <button><img src="" alt="" /></button>
                </div>
            </div>
            
            
        </div>
        <div className="niz_footer">
            <p>НОЭКС. Все права защищены 2021©. Инженерные изыскания с 1999 года.</p>
        </div>
      </footer>
    </>
  )
}

export default App