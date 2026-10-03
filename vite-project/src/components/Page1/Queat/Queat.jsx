import './style.scss'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Photo } from '../../../photo.js';

function App() {
  return (
    <>
      <section className='queat'>
        <div className="center">
          <div className="verh">
                <h1>Вопросы и ответы</h1>
          </div>
          <div className="niz">
                <div className="left">
                    <span>На нашли свой вопрос? Свяжитесь с нами!</span>
                </div>
                <div className="right">
                    <div className="otvet">
                        <img src={Photo.minus} alt="" />
                        <div className="qa">
                            <h4>Сколько вы работаете в этой области?</h4>
                            <div>
                                <p>Мы работаем уже 30 лет и накопили уникальный опыт. Любые трудности для нас это пустяк</p>
                            </div>
                        </div>
                    </div>
                    <div className="otvet">
                        <img src={Photo.plus} alt="" />
                        <div className="qa">
                            <h4>Вы работаете по всей России?</h4>
                        </div>
                    </div>
                    <div className="otvet">
                        <img src={Photo.plus} alt="" />
                        <div className="qa">
                            <h4>Какие услуги в плане инженерных изысканий Вы оказываете?</h4>
                        </div>
                    </div>

                    <div className="otvet">
                        <img src={Photo.plus} alt="" />
                        <div className="qa">
                            <h4>Есть ли у Вас прайс-лист?</h4>
                        </div>
                    </div>

                    <div className="otvet">
                        <img src={Photo.plus} alt="" />
                        <div className="qa">
                            <h4>Как оценивается время работ?</h4>
                        </div>
                    </div>

                    <div className="otvet">
                        <img src={Photo.plus} alt="" />
                        <div className="qa">
                            <h4>Есть ли у Вас вакансии?</h4>
                        </div>
                    </div>

                    <div className="otvet">
                        <img src={Photo.plus} alt="" />
                        <div className="qa">
                            <h4>Где расположен Ваш офис?</h4>
                        </div>
                    </div>
                </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default App