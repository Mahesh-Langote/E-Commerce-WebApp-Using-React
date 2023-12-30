import React from 'react'
import Products from '../../Products';
import Product from './Product';
import './Shop.css';

export const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        
      </div>
      <div className='products'>
        {""}
        {Products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  )
}

export default Shop;
