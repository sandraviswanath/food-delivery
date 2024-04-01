import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import './DetailedCard.css'
import { CiStar } from 'react-icons/ci'
import { BsFillCartFill } from 'react-icons/bs'
import { Col, Container, Row } from 'react-bootstrap'
import { userData } from '../../../App'


// import '../CardCollection.css'

function DetailedCard() {
  const {user}=useContext(userData);
  

 const Navigate=useNavigate()
    const {email}=useParams()
    // const {id}=useParams()
    const [first, setfirst] = useState([]);
    const [product, setProduct] = useState([]);
  // const [user, setuser] = useState({})
    // const [cart, setCart] = useState([])
    // const [cart, setCart] = useCart()
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
             
   setProduct(foodresponse.data)
  //  console.log(product);
   }
   catch (error){
    console.error('Error fetching food items:', error)
     
   }
 
 };
 fooditems();
},[]);



    const newname=email;
    // const newid=id;
    // console.log(newname)
    // const iddetails=first.filter((item)=>item._id===newid)
    const namedetails=first.filter((item)=>item.email===newname)
    // console.log(namedetails)
    const prodetails=product.filter((item)=>item.email===newname)
    // const productid=product.filter((item)=>item._id===newid)
    // console.log(prodetails)

   
    // const addToCart = (menu) => {
    //   setfirst([...first, menu]);
    //   settotal((prevTotal) => prevTotal + menu.price);
    //   Navigate("/cart");
    // };


    const handleAddToCart = async (product) => {
      try {
        const response = await axios.post('http://localhost:5000/createcart', {
          product, 
          email : user.email, 
         
        });
        console.log('Item added to cart:', response.data);
        setAddedToCart(true);
      } catch (error) {
        console.error('Error adding item to cart:', error);
      }
      Navigate(`/cart2/${user.email}`);
    };
    
    
        
    
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

<h4 class="section-p1">Product </h4>
{prodetails.length > 0 && prodetails.map((data) => (
  <div key={data._id} style={{display:'flex !important'}}>
    
    {data.fooditems && data.fooditems.map((menu) => (
      menu && (
        <section id="product1" class="section-p1" style={{ width: '23%',marginTop:'-100px' }} key={menu._id}>
          <div className="pro-container" style={{ display: 'flex' }}>
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
                <h4>₹{menu.price} for one</h4>
              </div>
              {/* {!addedToCart && <i class="fal fa-shopping-cart cart" onClick={() => addToCart(menu)}></i>}  */}
               {/* {!addedToCart && <Link to={`/cart/${details.email}`}><i class="fal fa-shopping-cart cart"onClick={() => handleAddToCart(menu)} ></i></Link>} */}
               {!addedToCart && <i class="fal fa-shopping-cart cart"onClick={() => handleAddToCart(menu)} ></i>}
              {/* {!addedToCart && <button onClick={()=>setCart([...cart,menu])} class="normal">Add To Cart</button>} */}
              {/* {addedToCart && <p>Item added to cart!</p>} */}
              <button class="order">Order now!!</button>
            </div>
          </div>
        </section>
      )
    ))}
  </div>
))}
</div>
   ))}
  </div>
  {/* <h4 class="section-p1">Product </h4>
  {prodetails.length > 0 && prodetails.map((data) => (
 <div>
    {data && data.fooditems && data.fooditems.map((menu) => (
    <section id="product1" class="section-p1" style={{ width: '23%' }}>
     
        <div className=" pro-container" style={{ display: 'flex' }} >
            <div className="pro" style={{ height: '310px' }}>
            
                <img key={menu?._id} src={menu && menu.foodimage} alt={menu && menu.foodname} style={{ height: '150px', width: '220px' }} />
                <div className='res-row'>
                    <div className='res-name'>{menu && menu.foodname}</div>
                    {menu && menu.itemrating && (
                        <div className='res-rating absolute-center'>{menu && menu.itemrating} <CiStar className='absolute-center' style={{ fontSize: '10px', marginLeft: '2px' }} />
                        </div>)}
                </div>
                <div className="des">
                    <span></span>
                    <h4>{menu && menu.price}</h4>
                </div>
                {!addedToCart && <Link to={`/cart/${menu && menu._id}`}><i class="fal fa-shopping-cart cart"></i></Link>}
                {addedToCart && <p>Item added to cart!</p>}
                <button onClick={handlePlaceOrder} class="order">Order now!!</button>
            </div>
        </div>
    </section>
))}
 </div>
  ))} */}







  </div>
);




}

export default DetailedCard
