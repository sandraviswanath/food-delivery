import React from 'react'
import './delivery.css'
import Filters from './common/Filters'
import { CiSliderHorizontal } from "react-icons/ci";
import DeliveryCollections from './DeliveryCollections';
import ExploreSection from './ExploreSection';
import restaurants from './Restaurants';
function Delivery() {
  const deliveryFilters=[
    {
      id:'1',
      icon:<CiSliderHorizontal className='absolute-center' />,
      title:'Filters',
    },
    {
      id:'2',
      title:'Rating:4.0+',
    },
    {
      id:'3',
      title:'safe and hygienic',

    },
    {
      id:'4',
      title:'pure veg',
    },
    {
      id:'5',
      title:'Delivery Time',
      icon:<i className=' absolute-center'></i>,
    },
    {
      id:'6',
      title:'Great offers'
    },

  ]

const restaurantList= restaurants;

  return (
    <div>
      <div className='max-width'>
        <Filters filterList={deliveryFilters}/>
      </div>
      <DeliveryCollections/>
      <ExploreSection list={restaurantList} collectionName=''/>
    </div>
  )
}

export default Delivery
