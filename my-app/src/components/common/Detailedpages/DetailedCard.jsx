import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './DetailedCard.css'
import { CiStar } from 'react-icons/ci'
import { BsFillCartFill } from 'react-icons/bs'
import { Col, Container, Row } from 'react-bootstrap'
// import '../CardCollection.css'

function DetailedCard() {
 
    const {email}=useParams()
    const [first, setfirst] = useState([]);
    const [second, setsecond] = useState([]);
    const [order, setOrder] = useState([]);
    const [addedToCart, setAddedToCart] = useState(false);
    useEffect(()=>{
    const restaurantitems =async()=>{
     
     try{
       const response = await axios.get('http://localhost:5000/foodlist')
               
     setfirst(response.data)
    //  console.log(first);
     }
     catch{
       
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
   catch{
     
   }
 
 };
 fooditems();
},[]);

    const newname=email;
    // console.log(newname)
    const namedetails=first.filter((item)=>item.email===newname)
    // console.log(namedetails)
    const prodetails=second.filter((item)=>item.email===newname)
    console.log(prodetails)

   
        
      

        const handleAddToCart = item => {
          const updatedOrder = [...order, item];
          setOrder(updatedOrder);
          setAddedToCart(true);
      };
      const handlePlaceOrder = async () => {
        try {
            const orderData = order.map(item => ({
                productId: item._id,
                quantity: 1,
                
                
                // Assuming each item has a quantity of 1
                // Add any other necessary fields from the item
            }));
            await axios.post('http://localhost:5000/orderdata', orderData);
            setOrder([]);
            console.log('Order placed successfully!');
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };
    


        // const handleAddToCart = async () => {
        //   try {
        //     // Access _id of the first element in the namedetails array
        //     const productId = namedetails[0]._id;
        //     const procar = namedetails;
        //     console.log(procar);
        //     await axios.post('http://localhost:5000/createcart', { productId, quantity: 1,procar });
        //     setAddedToCart(true);
        //   } catch (error) {
        //     console.error('Error adding item to cart:', error);
        //   }
        // };
        
    
//   return (
//     <div>
//         {namedetails.map((details)=>(
//       <section id="prodetails" class="section-p1">
//     <div class="single-pro-image">
//         <img src={details.cover} width="100%" id="mainImg"alt=""/>
        
//     </div>
//     <div class="single-pro-details">

// <h4>{details.title}</h4>
// <h6>{details.subtitle}</h6>
// <h6 style={{color:'rgb(105, 105, 105)'}}>{details.place}</h6>
// <p style={{color:'rgb(105, 105, 105)'}}>{details.time}</p>
// <h2>{details.price}</h2>
// <select >
//     <option>Select Size</option>
//     {[...Array(10).keys()].map((x,i)=>{
//                 return <option value={i+1}>{i+1}</option>
//             })}
//     {/* <option>1</option>
//     <option>2</option>
//     <option>X</option>
//     <option>XXL</option> */}
// </select>
// <input type="number" value="1"/>
// {!addedToCart && <button onClick={handleAddToCart} class="normal">Add To Cart</button>}
// {addedToCart && <p>Item added to cart!</p>}
// <h4>Product </h4>
// {details.fooditems.map((menu)=>(
// <span>{menu.foodname}</span>
// ))}
//     </div>
// </section>
// ))}  
//     </div>
//   )



return (
  <div>
   <div>
    {namedetails.length > 0 && namedetails.map((details) => (
      <section id="prodetails" class="section-p1" key={details?._id}>
        {/* <div style={{display:'flex'}}> */}
        {/* <div class="single-pro-image">
          <img src={details?.cover} id="mainImg" width='686px'height='370px' alt=""/>
        
        </div> */}
       
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
              <h2>{details.price}</h2>
              </div>
              )}
               
               
             
              {/* <select>
                <option>Select Size</option>
                {[...Array(10).keys()].map((x, i) => {
                  return <option value={i+1} key={i}>{i+1}</option>
                })}
              </select> */}
              {/* <input type="number" value="1"/> */}
              {/* {!addedToCart && <button onClick={handleAddToCart} class="normal">Add To Cart</button>}
              {addedToCart && <p>Item added to cart!</p>} */}
              
         
         
        
      </section>
   ))}
  </div>
  <h4>Product </h4>
             
              {prodetails.fooditems && prodetails.fooditems.map((menu) => (
                // <span key={menu?._id}>{menu && menu.foodname}</span>


                   
                <section id="product1"class="section-p1" style={{width:'23%'}}>
                
                <div className=" pro-container" style={{display:'flex'}} >
                  
                    <div className="pro"style={{height:'310px'}}>
                        <img key={menu?._id} src={menu && menu.foodimage} alt={menu && menu.foodname} style={{height:'150px',width:'220px'}}/>
                        <div className='res-row'>
                        <div className='res-name'>{menu && menu.foodname}</div>
                       
                        {menu && menu.itemrating && (
                         <div className='res-rating absolute-center'>{menu && menu.itemrating} <CiStar className='absolute-center'style={{fontSize:'10px',marginLeft:'2px'}} />
                         </div>)}
                         </div>
                         <div className="des">
                         <span></span>
                            <h4>{menu && menu.price}</h4>
                            </div>
                            {!addedToCart &&  <Link to={`/cart/${menu && menu._id}`}><i class="fal fa-shopping-cart cart" ></i></Link>}
                            {addedToCart && <p>Item added to cart!</p>}
                           
                            <button onClick={handlePlaceOrder} class="order">Order now!!</button>
                            {/* {order.length > 0 && (
                              <div>
                              <ul>
                        {order.map(item => (
                            <li key={item._id}>{item.title} - {item.price}</li>
                        ))}
                    </ul>
                    <button onClick={handlePlaceOrder} class="order">Place Order</button>
                </div>
            )} */}
                        {/* <a href="#"><BsFillCartFill className='cart'/></a> */}
                        {/* <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                        <a href="#"><i className='cart'>{display.time}</i></a> */}
                
                    </div>
                 
                </div>
                </section>
               

              ))}
  </div>
);




}

export default DetailedCard
