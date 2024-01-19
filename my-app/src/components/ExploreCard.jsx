import React from 'react'
import { Card }from 'react-bootstrap'
import { CiStar } from "react-icons/ci";
import './ExploreCard.css'

function ExploreCard({restaurant}) {
    const name=restaurant?.info?.name ??"";
    const coverImg=restaurant?.info?.image?.url;
    const deliveryTime=restaurant?.order?.deliveryTime;
    const rating=restaurant?.info?.rating?.rating_text;
    const approxPrice=restaurant?.info?.cfo?.text;
    const offers=restaurant?.bulkOffers??[];
    const cuisines=restaurant?.info?.cuisine?.map((item)=>item.name).slice(0,3);
    const bottomContainers=restaurant?.bottomContainers;
    const goldOff=restaurant?.gold?.text;
    const proOff=offers.length >1 ?offers[0].text : null;
    const discount=offers.length >1 ? offers[1].text : offers.length ===1 ? offers[0].text : null;

  return (
    <div className='explore-card cur-po'>
       <Card style={{ width: '18rem' }} className='explore-card-cover'>
      <Card.Img className='explore-card-image' variant="top" src={coverImg} alt=''/>
      <Card.Body>
        <Card.Title className=''>{name}</Card.Title>
        <Card.Text className='delivery-time'>
          {deliveryTime}
        </Card.Text>
        {proOff && <div className='pro-off'>{proOff}</div>}
        {goldOff && <div className='gold-off absolute-center'>{goldOff}</div>}
        {discount && <div className='discount absolute-center'>{discount}</div>}
       <div className='res-row'>
       <div className='res-name'>{name}</div>
       {rating && (
        <div className='res-rating absolute-center'>{rating} <CiStar className='absolute-center' />
        </div>)}
       </div>
      <div className='res-row'>

      </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ExploreCard
