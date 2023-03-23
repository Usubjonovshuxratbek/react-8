import React, { useState } from 'react'
import './Header.scss'
import Logo from '../../assets/img/Logo.png'

function Header() {
    const [active, setActive] = useState(2)
    return (
        <div className='header'>
            <ul className='header__list'>
                <li className={active === 1? 'header__item header__active' : 'header__item'}>
                    <span>
                        <a href="/"><img src={Logo} alt="" /></a>
                    </span>
                </li>
                <li className={active === 2? 'header__item header__active' : 'header__item'}>
                    <span onClick={()=> setActive(2)} className='header__icon'>
                        <i className="bi bi-house"></i>
                    </span>
                </li>
                <li className={active === 3? 'header__item header__active' : 'header__item'}>
                    <span onClick={()=> setActive(3)} className='header__icon'>
                        <i className="bi bi-house"></i>
                    </span>
                </li>
                <li className={active === 4? 'header__item header__active' : 'header__item'}>
                    <span onClick={()=> setActive(4)} className='header__icon'>
                        <i className="bi bi-house"></i>
                    </span>
                </li>
                <li className={active === 5? 'header__item header__active' : 'header__item'}>
                    <span onClick={()=> setActive(5)} className='header__icon'>
                    <i className="bi bi-gear"></i>
                    </span>
                </li>
                <li className={active === 6? 'header__item header__active' : 'header__item'}>
                    <span onClick={()=> setActive(6)} className='header__icon'>
                    <i className="bi bi-box-arrow-right"></i>
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default Header