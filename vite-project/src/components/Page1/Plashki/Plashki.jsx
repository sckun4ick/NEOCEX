import './style.scss'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Photo } from '../../../photo.js';

function App() {
  return (
    <>
      <section className='left_dva'>
        <div className="center">
            <div className="left">
                <div className="center_l">
                    <h1>О нас</h1>
                    <p>Мы предпочитаем работать с Вами, а не для Вас. Узнайте о наших преимуществах и этапах работы</p>
                    <a href="">Подробнее</a>
                </div>
            </div>
            <div className="left">
                <div className="center_l">
                    <h1>Услуги</h1>
                    <p>Мы предлагаем полный спектр услуг в области инженерных изысканий. Узнайте подробнее о каждой из услуг</p>
                    <a href="">Подробнее</a>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default App