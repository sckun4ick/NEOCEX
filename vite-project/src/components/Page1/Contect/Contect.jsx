import './style.scss'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Photo } from '../../../photo.js';

function App() {
  return (
    <>
      <section className='contect'>
        <div className="center">
            <div className="verh">
                <h1>Связаться с нами</h1>
            </div>
            <div className="niz">
                <div className="left">

                </div>
                <form action="">
                    <div>
                        <span>Имя</span>
                        <input type="text" placeholder='Введите имя'/>
                        <span>Номер телефона</span>
                        <input type="text" placeholder='+7 (---) --- -- --'/>
                        <span>Текст сообщения (необязательно)</span>
                        <input type="text" placeholder='Введите текст'/>
                    </div>
                    <button>Отправить</button>
                </form>
                <div className="right">
                    <p>Напишите нам, если у Вас есть вопросы. Мы ответим Вам в самое ближайшее время (в течении 1 часа). Также вы можете описать в сообщении суть вопроса, это поможет нам более оперативно справиться с вашей проблемой</p>
                    <p>Нажимая на кнопку, Вы принимаете <a href="">Положение</a> и <a href="">Согласие</a> на обработку персональных данных</p>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default App