import React, { useContext} from 'react'
import { Context } from '../../Context/Context'
import './Order.scss'
import { data } from '../../lib/data'

function Order() {
  const { order } = useContext(Context)


  return (
    <div className='order'>
      <h2 className='order-title'>Orders #34562</h2>
      <div className="btn-group">
        <button className='btn activer'>Dine In</button>
        <button className='btn'>To Go</button>
        <button className='btn'>Delivery</button>
      </div>
      <ul className='list'>
        <li className='item'>
          <span>Item</span>
          <span>Qty</span>
          <span>Price</span>
        </li>
      </ul>
      <ul className='order-list'>
        {
          order && [...new Set(order)].map((item, index) => (
            <li className='order-block' key={index}>
              <div className="block-1">
                <div className="product">
                  <div className="product-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="product-info">
                    <h3 className='title'>{item.title}</h3>
                    <span className='price'>{item.price} $</span>
                  </div>
                </div>
                <span className='count'>{item.count}</span>
                <span className='total-count'>{(item.price * item.count).toFixed(2)} $</span>
              </div>
              <div className="block-2">
                <input type="text" />
                <button><i className='bi bi-trash-fill'></i></button>
              </div>
            </li>
          ))
        }
      </ul>
      <button onClick={data.price}>click</button>
    </div>
  )
}

export default Order;
