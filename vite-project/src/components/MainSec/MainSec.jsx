import './style.scss'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Photo } from '../../photo.js';

function App() {
  return (
    <>
      <section className='main'>
        <div className="image_bg">
            <div className="center">
                <div className="up">
                    <div className="left">  
                        <h1>НОЭКС. Нам доверяют. с 1988 года.</h1>
                        <p>С равным успехом мы работаем на участках строительства технически сложных и ответственных объектов, и типовых сооружений. Все работы проходят государственную экспертизу.</p>
                        <div>
                            <button className='green'>Посмотреть услуги</button>
                            <button className='yellow'>Наши проекты</button>
                        </div>
                    </div>
                    <div className="right">
                        <p>Оказание полного спектра услуг в области инженерных изысканий</p>
                    </div>
                </div>
                <div className="down">
                    <div className="lents">
                        <div className="active"></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="button_number">
                        <div className="button">
                            <button><img src={Photo.left_right_arrow2} alt="" /></button>
                            <button><img src={Photo.left_right_arrow1} alt="" /></button>
                        </div>
                        <div className="number">
                            <p>01</p>
                            <p>-</p>
                            <p>05</p>
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