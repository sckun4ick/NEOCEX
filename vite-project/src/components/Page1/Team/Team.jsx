import './style.scss'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Photo } from '../../../photo.js';

function App() {
  return (
    <>
      <section className='team'>
        <div className="center">
          <div className="verh">
                <h1>Высокий уровеньи профессиональая команда</h1>
          </div>
          <div className="niz">
                <div className="left">
                    <span>Подтверждение наших компетенций в специализации</span>
                </div>
                <div className="right">
                    <div className='pepe'>
                        <div className="center_d">
                            <h3>30 лет работы</h3>
                            <p>Мы работаем уже 30 лет и накопили уникальный опыт. Любые трудности для нас это пустяк</p>
                        </div>
                    </div>
                    <div className='pepe'>
                        <div className="center_d">
                            <h3>Выполняем комплекс работ</h3>
                            <p>Мы проводим весь необходимый комплекс работ для каждого объекта. Это гарантирует 100% прохождение экспертизы</p>
                        </div>
                    </div>
                    <div className='pepe'>
                        <div className="center_d">
                            <h3>Команда профессионалов</h3>
                            <p>В нашей профессиональной команде 13 высококвалифицированных специалистов</p>
                        </div>
                    </div>
                    <div className='pepe'>
                        <div className="center_d">
                            <h3>Отвечаем быстро</h3>
                            <p>Мы даем быстрый ответ на ваше обращение. Обычно в течение часа</p>
                        </div>
                    </div>
                    <div className='pepe'>
                        <div className="center_d">
                            <h3>Огромный опыт</h3>
                            <p>Мы обладаем огромным опытом и собственной уникальной базой пройденных скважин. Это позволяет нам предвидеть проблемы</p>
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