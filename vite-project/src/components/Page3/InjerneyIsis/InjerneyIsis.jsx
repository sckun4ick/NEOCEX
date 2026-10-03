import './style.scss'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Photo } from '../../../photo.js';

function App() {
  return (
    <>
      <section className='isiss'>
        <div className="center">
            <div className="left">
                <span>Инженерные изыскания</span>
            </div>
            <div className="right">
                <h1>Мы знаем об этом все!</h1>
                <p>Мы стоим за крупнейшими и самыми сложными проектами столицы: все высотные здания комплекса «Москва сити», Стадион «Спартак Арена», станция метро «Окская», и многие другие работы.</p>
                <div className='pedick'>
                    <div>
                        <h3>0</h3>
                        <p>Отрицательных заключений экспертизы</p>
                    </div>

                    <div>
                        <h3>100%</h3>
                        <p>Соблюдения сроков договоров</p>
                    </div>

                    <div>
                        <h3>2.5</h3>
                        <p>Тонны и терабайты архивной информации</p>
                    </div>

                    <div>
                        <h3>1000</h3>
                        <p>Более 1000 крупных объектов</p>
                    </div>

                    <div>
                        <h3>100</h3>
                        <p>Более 100 уникальных объектов</p>
                    </div>

                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default App