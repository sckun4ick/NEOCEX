import './style.scss'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Photo } from '../../../photo.js';

function App() {
  return (
    <>


    <section className='sertificats'>
        <div className="center">
            <div className="verh">
                <span>Мы сертифицированная компания</span>
                <h1>Наши Сертификаты</h1>
            </div>
            <div className="niz">
                <article>
                    <div className="center_art">
                        <img src={Photo.sertificat} alt="" />
                        <h3>Реестр АИИС</h3>
                        <a href="">Посмотреть в реестре</a>
                    </div>
                </article>
                <article>
                    <div className="center_art">
                        <img src={Photo.sertificat} alt="" />
                        <h3>Национальный реестр специалистов (1)</h3>
                        <a href="">Посмотреть в реестре</a>
                    </div>
                </article>
                <article>
                    <div className="center_art">
                        <img src={Photo.sertificat} alt="" />
                        <h3>Национальный реестр специалистов (2)</h3>
                        <a href="">Посмотреть в реестре</a>
                    </div>
                </article>
            </div>
        </div>
      </section>

      
    </>
  )
}

export default App