import './style.scss'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Photo } from '../../../photo.js';

function App() {
  return (
    <>
      <section className='projects'>
        <div className="center">
            <div className="up">
                <h1>Проекты</h1>
                <div>
                    <button></button>
                    <p>На главную</p>
                </div>
            </div>
            <div className="down">
                <div className="verh">
                    <ul>
                        <button className='active'>За все время</button>
                        <button>2010-2020</button>
                        <button>2000-2010</button>
                        <button>1990-2000</button>
                    </ul>
                </div>
                <div className="niz">
                    <article>
                        <div className="center_art">
                            <h6>1993-2015</h6>
                            <img src={Photo.project_image1} alt="" />
                            <div className="verh_div">
                                <div>
                                    <h3>Москва-Сити</h3>
                                    <p>Оказание полного спектра услуг на двенадцати основных объектах комплекса «Москва сити</p>
                                </div>
                                <a href="">Подробнее</a>
                            </div>
                        </div>
                    </article>

                    <article>
                        <div className="center_art">
                            <h6>2013-2014</h6>
                            <img src={Photo.project_image2} alt="" />
                            <div className="verh_div">
                                <div>
                                    <h3>АТК на Кутузовском</h3>
                                    <p>Актуализация инженерно-геологических изысканий на участке строительства административно-торгового комплекса</p>
                                </div>
                                <a href="">Подробнее</a>
                            </div>
                        </div>
                    </article>

                    <article>
                        <div className="center_art">
                            <h6>2012</h6>
                            <img src={Photo.project_image3} alt="" />
                            <div className="verh_div">
                                <div>
                                    <h3>Завод ЗИЛ</h3>
                                    <p>Реконструкция легендарного автогиганта, завода «ЗИЛ» Бурение инженерно-геологических скеважин до глубины 70 м, геофизические исследования</p>
                                </div>
                                <a href="">Подробнее</a>
                            </div>
                        </div>
                    </article>

                    <article>
                        <div className="center_art">
                            <h6>2012-2013</h6>
                            <img src={Photo.project_image4} alt="" />
                            <div className="verh_div">
                                <div>
                                    <h3>Станция Окская</h3>
                                    <p>Бурение, геофизический каротаж, грунтовые и штамповые испытания, оборудование скважин, опытно-фильтрационные работы, лабораторные исследования, моделирование</p>
                                </div>
                                <a href="">Подробнее</a>
                            </div>
                        </div>
                    </article>

                    <article>
                        <div className="center_art">
                            <h6>2010-2011</h6>
                            <img src={Photo.project_image5} alt="" />
                            <div className="verh_div">
                                <div>
                                    <h3>ТРК Авиапарк</h3>
                                    <p>Бурение, испытания грунтов методами статического зондирования, штамповые испытания, лабораторные исследования</p>
                                </div>
                                <a href="">Подробнее</a>
                            </div>
                        </div>
                    </article>

                    <article>
                        <div className="center_art">
                            <h6>2007-2010</h6>
                            <img src={Photo.project_image6} alt="" />
                            <div className="verh_div">
                                <div>
                                    <h3>Стадион Спартак</h3>
                                    <p>Инженерно-геологические изыскания, в результате которых приняты и воплощаются в жизнь оригинальные архитектурные и инженерные решения</p>
                                </div>
                                <a href="">Подробнее</a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default App