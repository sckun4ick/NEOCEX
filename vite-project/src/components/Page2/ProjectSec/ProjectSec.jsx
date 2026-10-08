import { useEffect, useState } from 'react'
import './style.scss'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Photo } from '../../../photo.js';

function App() {
    const items = [
        { id: 1, category: "1990-2000", title: "Москва-Сити", years: "1993-2015", image: Photo.project_image1, desc: "Оказание полного спектра услуг на двенадцати основных объектах комплекса «Москва сити" },
        { id: 2, category: "2010-2020", title: "АТК на Кутузовском", years: "2013-2014", image: Photo.project_image2, desc: "Актуализация инженерно-геологических изысканий на участке строительства административно-торгового комплекса" },
        { id: 3, category: "2010-2020", title: "Завод ЗИЛ", years: "2012", image: Photo.project_image3, desc: "Реконструкция легендарного автогиганта, завода «ЗИЛ» Бурение инженерно-геологических скеважин до глубины 70 м, геофизические исследования" },
        { id: 4, category: "2010-2020", title: "Станция Окская", years: "2012-2013", image: Photo.project_image4, desc: "Бурение, геофизический каротаж, грунтовые и штамповые испытания, оборудование скважин, опытно-фильтрационные работы, лабораторные исследования, моделирование" },
        { id: 5, category: "2010-2020", title: "ТРК Авиапарк", years: "2010-2011", image: Photo.project_image5, desc: "Бурение, испытания грунтов методами статического зондирования, штамповые испытания, лабораторные исследования" },
        { id: 6, category: "2000-2010", title: "Стадион Спартак", years: "2007-2010", image: Photo.project_image6, desc: "Реконструкция легендарного автогиганта, завода «ЗИЛ» Бурение инженерно-геологических скеважин до глубины 70 м, геофизические исследования" },
    ]

    const [activeTab,setActiveTab] = useState("all");
    const [visibleItems, setVisibleItems] = useState([])

    useEffect(() => {
        if (activeTab == "all"){
            setVisibleItems(items)
        } else{
            setVisibleItems(items.filter(item => item.category === activeTab));
        }
    }, [activeTab]);
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
                        <button onClick={() => setActiveTab("all")} className={activeTab === "all" ? 'active' : ''}>За все время</button>
                        <button onClick={() => setActiveTab("2010-2020")} className={activeTab === "2010-2020" ? 'active' : ''}>2010-2020</button>
                        <button onClick={() => setActiveTab("2000-2010")} className={activeTab === "2000-2010" ? 'active' : ''}>2000-2010</button>
                        <button onClick={() => setActiveTab("1990-2000")} className={activeTab === "1990-2000" ? 'active' : ''}>1990-2000</button>
                    </ul>
                </div>
                <div className="niz">
               
                    {visibleItems.map((item) => (
                        <article key={item.id}>
                            <div className="center_art">
                                <h6>{item.years}</h6>
                                <img src={item.image} alt={item.title} />
                                <div className="verh_div">
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                    <a href="">Подробнее</a>
                                </div>
                            </div>
                        </article>
                    ))}
                    {/* /* <article key={items[0].id}>
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

                    <article key={items[1].id}>
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

                    <article key={items[2].id}>
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

                    <article key={items[3].id}>
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

                    <article key={items[4].id}>
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

                    <article key={items[5].id}>
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
                    </article> */} 
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default App