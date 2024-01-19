import React from 'react'
import './DeliveryItem.css'
function DeliveryItem({item}) {
  return (
    <div className='shadow-sm p-3 mb-5 bg-white rounded'>
    <div className='delivery-item-cover'>
      <img src={item.cover} className='delivery-item-image' alt={item.title}/>
    </div>
    <div className='delivery-item-title'>{item.title}</div>
    </div>
  )
}

export default DeliveryItem
