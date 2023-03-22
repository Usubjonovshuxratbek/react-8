import React, { useContext, useState } from 'react'
import { Context } from '../../Context/Context';
import { data } from '../../lib/data'
import './Menu.scss'

const types = []
data.forEach(item => {
  if(types.includes(item.type) !== true)
    types.push(item.type)
});


function Menu() {
    const {order, SetOrder} = useContext(Context)
    const [category, setCategory] = useState('Ichimlik')
    const [active, setActive] = useState(0)
  return (
    <div className='menu'>
      <div className="menu__head">
        <div>
          <h2>Jaegar Resto</h2>
          <p>Tuesday, 2 Feb 2021</p>
        </div>
        <div>
        <label htmlFor="search"><i className="bi bi-search"></i></label>
        <input id='search' type="text" placeholder='Search for food, coffe, etc..' />
        </div>
      </div>
       <div className="menu__nav">
       {
        types && types.map((item, index) => (
          <button className={active === index? 'active' : null} key={item} onClick={()=> {
            setCategory(item)
            setActive(index)
          }}>{item}</button>
        ))
      }
       </div>

      <ul className='menu__list'>
        {
          data && data.filter((i)=> i.type === category).map((item, index) => (
            <li onClick={()=> {
              SetOrder([...new Set(order), item])
              item.count = item.count? item.count + 1 : 1
              item.have = item.have? item.have - 1 : item.have
            }} className='menu__item' key={index}>
              <img src={item.img} alt="" />
              <div className="info">
              <h3 className='title'>{item.title}</h3>
              <span className='price'>$ {item.price}</span>
              <p className='text'>{item.have}  Bowls available</p>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Menu;
