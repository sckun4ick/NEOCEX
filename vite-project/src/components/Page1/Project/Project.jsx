import './style.scss'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Photo } from '../../../photo.js';

function App() {
  return (
    <>
      <section className='project'>
        <div className="center">
            <div className="verh">
                <h1>Высокое качество работы в наших проектах</h1>
                <div>
                    <p>Более</p>
                    <h3>100</h3>
                    <p>Крупных проектов</p>
                </div>
            </div>
            <div className="niz">
                <div className="left">
                    <div className="up">
                        <div><a>Москва-Сити</a></div>
                        <div><a>Стадион «Спартак»</a></div>
                        <div><a>ТРК «Авиапарк»</a></div>
                        <div><a>АТК на Кутузовском</a></div>
                        <div><a>Завод «ЗИЛ»</a></div>
                        <div><a>Станция «Окская»</a></div>
                        <div><button>Все портфолио</button></div>
                    </div>
                    <div className="down">
                        <button><img src={Photo.left_right_black2} alt="" /></button>
                        <button><img src={Photo.left_right_black1} alt="" /></button>
                    </div>
                </div>
                <div className="right">
                    <article>
                        <img src={Photo.image_project1} alt="" />
                        <div>
                            <h6>Renaissance Moscow Towers</h6>
                            <p>2013</p>
                        </div>
                        <a href="">Подробнее</a>
                    </article>
                    <article>
                        <img src={Photo.image_project2} alt="" />
                        <div>
                            <h6>Башня «Россия»</h6>
                            <p>2007-2008</p>
                        </div>
                        <a href="">Подробнее</a>
                    </article>
                    <article>
                        <img src={Photo.image_project3} alt="" />
                        <div>
                            <h6>Башни «Око»</h6>
                            <p>2007</p>
                        </div>
                        <a href="">Подробнее</a>
                    </article>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default App