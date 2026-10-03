import './style.scss'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Photo } from '../../../photo.js';

function App() {
  return (
    <>
      <section className='smeta'>
        <div className="center">
            <div className="verh">
                <h1>НЕОБХОДИМО РАССЧИТАТЬ СМЕТУ?</h1>
            </div>
            <div className="niz">
                <div className="up">
                  <div className="left">
                    <p>Номер телефона</p>
                  </div>
                  <div className='right'>
                    <p>Не заполненно</p>
                    <input type="text" placeholder='+7 (---) --- -- --'/>
                  </div>
                </div>
                <div className="down">
                  <p>Загрузите техническое задание(если есть)</p>
                  <div className='user'>
                    <p>DOC, DOCX, TXT, OFC</p>
                    <form action="">
                      <div className='ap'>
                        <button><img src={Photo.download} alt="" /></button>
                        <h6>Загрузить файл</h6>
                      </div>
                      <div className='dobavka'>
                        <p>ТЗ Технониколь.doc</p>
                        <img src={Photo.trash} alt="" />
                      </div>
                      <div className='dobavka'>
                        <p>ТЗ-2 Технониколь.doc</p>
                        <img src={Photo.trash} alt="" />
                      </div>
                      <button>Рассчитать смету</button>
                    </form>
                  </div>   
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default App