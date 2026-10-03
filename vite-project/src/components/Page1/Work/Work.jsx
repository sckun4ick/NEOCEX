import './style.scss'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Photo } from '../../../photo.js';

function App() {
  return (
    <>
      <section className='work'>
        <div className="center">
          <div className="verh">
                <h1>Как мы работаем</h1>
          </div>
          <div className="niz">
                <div className="left">
                  <div className="palka">

                  </div>
                  <div className="polpota">
                    <div className='light'>
                        <div><p>1</p></div>
                        <p>Подготовка</p>
                    </div>
                    <div className='light'>
                        <div><p>2</p></div>
                        <p>Организация</p>
                    </div>
                    <div className='light'>
                        <div><p>3</p></div>
                        <p>Проведение изысканий</p>
                    </div>
                    <div className='light'>
                        <div><p>4</p></div>
                        <p>Экспертиза</p>
                    </div>
                    
                  </div>
                </div>
                <div className="right">
                  <div className="center_r">
                    <div className='we'>
                      <h4>Подготовка</h4>
                      <p>В этот период происходит постановка задач инженерных изысканий, горячее обсуждение и утверждение необходимого технического задания, подготавливается договорная документация и проверяются исходные данные. После проработки этих важных моментов, заключается договор</p>
                    </div>
                    
                    <div className='ew'>
                      <button><img src={Photo.left_right_black2} alt="" /></button>
                      <button><img src={Photo.left_right_black1} alt="" /></button>
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