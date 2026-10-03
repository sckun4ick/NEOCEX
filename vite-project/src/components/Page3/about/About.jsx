import './style.scss'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Photo } from '../../../photo.js';

function App() {
  return (
    <>
      <section className='about'>
        <div className="center">
            <div className="verh">

                <h1>О нас</h1>
                <button><img src={Photo.left_right_black2} alt="" />На главную</button>


            </div>
            <div className="niz">
                <div className="left">
                    <span>Мы обеспечиваем качество реализации проекта</span>
                </div>
                <div className="right">
                    <p>Для реализации Вашего проекта, будь то строительство коттеджа или масштабного архитектурного сооружения, необходимы качественные инженерные изыскания. Геологические, экологические и климатические условия уникальны для каждой местности. Они способны повлиять на Ваш проект. Для изучения этих условий и прогноза возможных последствий необходимо изучить и предвидеть все возможные факторы.</p>
                    <div>
                        <img src={Photo.image_about1} alt="" />
                        <img src={Photo.image_about2} alt="" />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default App