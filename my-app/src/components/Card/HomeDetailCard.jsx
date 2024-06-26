import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
// import './DetailedCard.css'
import { CiStar } from 'react-icons/ci'
import { BsFillCartFill } from 'react-icons/bs'
import { Col, Container, Row } from 'react-bootstrap'
// import '../CardCollection.css'

function HomeDetailCard() {
 const Navigate=useNavigate()
    const {email}=useParams()
    const {id}=useParams()
    const{ids}=useParams()
    const [first, setfirst] = useState([]);
    const [second, setsecond] = useState([]);
    const [cart, setCart] = useState([])
  // const [total, settotal] = useState(0)
    const [order, setOrder] = useState([]);
    const [addedToCart, setAddedToCart] = useState(false);
    useEffect(()=>{
    const restaurantitems =async()=>{
     
     try{
       const response = await axios.get('http://localhost:5000/foodlist')
               
     setfirst(response.data)
    //  console.log(first);
     }
     catch (error){
      console.error('Error fetching restaurant details:', error)
     }
   
   };
   restaurantitems();
},[]);


useEffect(()=>{
  const fooditems =async()=>{
   
   try{
     const foodresponse = await axios.get('http://localhost:5000/getfooditems')
             
   setsecond(foodresponse.data)
  //  console.log(second);
   }
   catch (error){
    console.error('Error fetching food items:', error)
     
   }
 
 };
 fooditems();
},[]);


useEffect(()=>{
  const cartitems =async()=>{
   
   try{
     const cartresponse = await axios.post('http://localhost:5000/createcart')
             
   setCart(cartresponse.data)

   }
   catch{
     
   }
 
 };
 cartitems();
},[]);


const newname=email;

    const newid=id;
   
    // console.log(newname)
    // const namedetails=first.filter((item)=>item._id===newid)
    const namedetails=first.filter((item)=>item.email===newname)
    // console.log(namedetails)
    // const prodetails=second.filter((item)=>item._id===newid)
    const prodetails=second.filter((item)=>item.email===newname)
    
    // console.log(prodetails)

   
    // const addToCart = (menu) => {
    //   setfirst([...first, menu]);
    //   settotal((prevTotal) => prevTotal + menu.price);
    //   Navigate("/cart");
    // };


    const handleAddToCart = async (menu) => {
      try {
        const response = await axios.post('http://localhost:5000/createcart', {
          productId: menu._id, // Assuming menu._id is the productId
          email: email, // Pass the email obtained from useParams
        });
        console.log('Item added to cart:', response.data);
        setAddedToCart(true);
      } catch (error) {
        console.error('Error adding item to cart:', error);
      }
    };
    


return (
  <div>
   <div>
    {namedetails.length > 0 && namedetails.map((details) => (
      <div>
      <section id="prodetails" class="section-p1" key={details?._id}>
       
       
        <Row>
          <Col sm={8}>
          <img src={details?.cover} id="mainImg"  alt="" style={{width:'100%',height:'500px'}}/>
          </Col>
          <Col sm={4}>
            <Col>
          <img src={details?.cover} id="mainImg"  alt="" style={{width:'100%',marginBottom:'2%',height:'250px'}}/>
          </Col>
          <Col>
          <img src={details?.cover} id="mainImg"  alt="" style={{width:'100%',height:'250px'}}/>
          </Col>
         </Col>
         
        </Row>
       
          {details && (
           <div class="single-pro-details">
              <h4>{details.title}</h4>
              <h6>{details.subtitle}</h6>
              <h6 style={{color:'rgb(105, 105, 105)'}}>{details.place}</h6>
              <p style={{color:'rgb(105, 105, 105)'}}>{details.time}</p>
              <a href={details.location} className='direcion'>Directions</a>
              <a href={details.phone} className='phone'>Call</a>
              <h2>{details.price}</h2>
              </div>
              )}        
      </section>

<h4 class="section-p1">Product </h4>
<Link to='/signup'>
{prodetails.length > 0 && prodetails.map((data) => (
  <div key={data._id} style={{display:'flex',flexWrap:'wrap'}}>
    {data.fooditems && data.fooditems.map((menu) => (
      menu && (
        <section id="product1" class="section-p1"  key={menu._id}>
         <div className="pro-container"> 
            <div className="pro" style={{ height: '310px' }}>
              {menu.foodimage && <img src={menu.foodimage} alt={menu.foodname} style={{ height: '150px', width: '220px' }} />}
              <div className='res-row'>
                <div className='res-name'>{menu.foodname}</div>
                {menu.itemrating && (
                  <div className='res-rating absolute-center'>{menu.itemrating} <CiStar className='absolute-center' style={{ fontSize: '10px', marginLeft: '2px' }} />
                  </div>)}
              </div>
              <div className="des">
                <span></span>
                <h4>{menu.price}</h4>
              </div>
              
             <i class="fal fa-shopping-cart cart"onClick={() => handleAddToCart(menu)} ></i>
                    
             
              <button class="order">Order now!!</button>
            </div>
           </div>
         </section> 
      )
    ))}
    
  </div>
  
))}
</Link>

</div>
   ))}
  </div>
  



  </div>
);




}

export default HomeDetailCard
