import './style.scss'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Photo } from '../../../photo.js';

function App() {
  return (
    <>
      <section className='how_work'>
        <div className="center">
            <div className="verh">
                <span>Как мы работаем</span>
                <h1>Мы предпочитаем работать по понятной схеме</h1>
            </div>
            <div className="niz">
                <div className="left">

                </div>
                <div className="right">
                    <article>
                        <img src={Photo.minus} alt="" />
                        <div className='jucha'>
                            <h6>Подготовка</h6>
                            <div>
                                <p>В этот период происходит постановка задач инженерных изысканий, горячее обсуждение и утверждение необходимого технического задания, подготавливается договорная документация и проверяются исходные данные. После проработки этих важных моментов, заключается договор</p>
                            </div>
                        </div>
                    </article>
                    <article>
                        <img src={Photo.plus} alt="" />
                        <div className='jucha'>
                            <h6>Организация</h6>
                            <div>
                            </div>
                        </div>
                    </article>

                    <article>
                        <img src={Photo.plus} alt="" />
                        <div className='jucha'>
                            <h6>Проведение изысканий</h6>
                            <div>
                            </div>
                        </div>
                    </article>

                    <article>
                        <img src={Photo.plus} alt="" />
                        <div className='jucha'>
                            <h6>Экспертиза</h6>
                            <div>
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