import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { userData } from '../../App';
import { Button, Table } from 'react-bootstrap';
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdClose } from 'react-icons/io';
import './Cart.css'

import { BsCartX } from "react-icons/bs";



const Cart2 = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [message, setMessage] = useState('');
  const [quantity, setQuantity] = useState(1);
 
  // const {email}=useParams();
  // console.log(email);
const {user}=useContext(userData);
const navigate = useNavigate();


  const cartitems= localStorage.getItem('cartitems') ? JSON.parse(localStorage.getItem('cartitems')) :[]

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {

//         if (!user) {
//           // Redirect to login page with a message
//           navigate('/log', { state: { message: 'Please log in to view your cart' } });
//           return;
//         }

//         const response = await axios.get(`http://localhost:5000/getcart/${user.email}`);
//         const products = response.data.products.map(product=>({
//           ...product,
//           quantity: product.quantity ||1 // Set default quantity to 1 if it's missing
//         }));
// const updatedCartItems = cartItems.map(item =>{
//   const existingIndex = products.findIndex(product=>product._id === item._id);
//   if (existingIndex !== -1) {
//     return{...item,quantity:products[existingIndex].quantity};
//     }
//    return item;
//   });
//   const newProducts =products.filter(product => !cartItems.some(item => item._id === product._id));

// const mergedCartItems = [...updatedCartItems,...newProducts];


//         setCartItems(mergedCartItems);

//         calculateTotalPriceAndQuantity(mergedCartItems); 





// setCartItems(products);
// calculateTotalPriceAndQuantity(products);


//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//         setError('Error fetching cart items. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//   //   fetchCartItems();
//   // }, [user.email]);
//   if (user && user.email) { // Check if user and user.email are not null before calling fetchCartItems
//     fetchCartItems();
//   }
// }, [user]);

useEffect(() => {
  const fetchCartItems = async () => {
    try {
      if (!user) {
        // Redirect to login page with a message
        navigate('/log', { state: { message: 'Please log in to view your cart' } });
        return;
      }

      const response = await axios.get(`http://localhost:5000/getcart/${user.email}`);
      const products = response.data.products.map(product => ({
        ...product,
        quantity: product.quantity || 1 // Set default quantity to 1 if it's missing
      }));

      const updatedCartItems = cartItems.map(item => {
        const existingIndex = products.findIndex(product => product._id === item._id);
        if (existingIndex !== -1) {
          return { ...item, quantity: products[existingIndex].quantity };
        }
        return item;
      });

      const newProducts = products.filter(product => !cartItems.some(item => item._id === product._id));
      const mergedCartItems = [...updatedCartItems, ...newProducts];

      setCartItems(mergedCartItems);
      calculateTotalPriceAndQuantity(mergedCartItems);
    } catch (error) {
      console.error('Error fetching cart items:', error);
      setError('your Cart is Empty!!.');
    } finally {
      setLoading(false);
    }
  };

  if (user && user.email) { // Check if user and user.email are not null before calling fetchCartItems
    fetchCartItems();
  }
}, [user]);



  const calculateTotalPriceAndQuantity = (items) => {
    let totalPrice = 0;
    let totalQuantity = 0;
  
    items.forEach(item => {
      // Extract the numerical value from the price string and convert it to a number
      const itemPrice = parseFloat(item.price.replace('₹', ''));
      totalPrice += itemPrice * item.quantity;
      totalQuantity += item.quantity;
    });
  
    // Update state variables with calculated values
    setTotalPrice(totalPrice);
    setTotalQuantity(totalQuantity);

  };
  console.log(totalQuantity);
  console.log(totalPrice);

 
  const updateQuantity = (productId, newQuantity) => {
    // Update the quantity of the product in the cartItems state
    const updatedCartItems = cartItems.map(item => {
      if (item._id === productId) { 
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    calculateTotalPriceAndQuantity(updatedCartItems); 
  };
  

 

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/deletecart/${id}/${user.email}`);
      // After successful deletion on the server, update the cart items displayed in the UI
      const updatedCartItems = cartItems.filter(item => item._id !== id);
      setCartItems(updatedCartItems);
      calculateTotalPriceAndQuantity(updatedCartItems); // Recalculate total price after item removal
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  
 



  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log('cartItems:', cartItems);
  

  
 
  return (

<div className='main-head-cart'>
<h1 style={{padding:'25px'}}>Cart</h1>
<div className='sub-div' >


{cartItems.length === 0 ? (
          <div style={{textAlign:'center'}}>
            <BsCartX style={{fontSize:'200px',color:'gray'}}/>
            <p style={{fontSize:'38px'}}>Your cart is empty</p>
          </div>
        ) : (
          
<>
<div style={{display:'flex',paddingTop:'40px',flexWrap: 'wrap'}}>
  {cartItems.map(product => (
    <div key={product._id} style={{ display: 'flex',marginTop:'20px'}}>
      <section id="product1" className="section-p4" style={{ width: '23%', marginTop: '-100px' }} key={product.id}>
        <div className="pro-container" style={{ display: 'flex' }}>
          <div className="pro" style={{ height: '310px' }}>
            <img src={product.foodimage} alt={product.foodname} style={{ height: '150px', width: '220px' }} />
            <div className='res-row'>
              <div className='res-name'>{product.foodname}</div>
            </div>
            <div className="des">
              <span></span>
              <h4>price:{product.price}</h4>

             
         {/* <div>Qty:
              <input type="number" name="quantity" min="1" value={product.quantity} onChange={(e) => updateQuantity(product._id, parseInt(e.target.value))} style={{width:'100px',marginLeft:'10px'}}/>
              
              </div> */}
              <div style={{display:'flex'}}>
              <div className='quantity-update-btn'>
              <button className='qnty-minus-btn' onClick={() => updateQuantity(product._id, product.quantity - 1)}>-</button>
              <span className='qnty-display'>{product.quantity}</span>
              <button className='qnty-plus-btn' onClick={() => updateQuantity(product._id, product.quantity + 1)}>+</button>

            </div>
            <div style={{marginLeft:'20px'}}>
            <button onClick={() => handleDelete(product._id)} className='remove-cart-btn'>Remove</button>
            </div>
            </div>
            </div>
            {/* <button onClick={()=>handleDelete(product._id)}>remove</button> */}
            
          </div>
        </div>
      </section>
    </div>
  ))}
</div>
<div style={{textAlign:'center'}} className='order-box'>
<div style={{fontSize:'20px'}}>Total Price: ${totalPrice}</div>
<div>Total Quantity: {totalQuantity}</div>

<div>
{/* <Button className='ordernow-btn'><Link to='/orderpage' style={{textDecoration:'none'}}>Order Now</Link></Button> */}
<Button className='ordernow-btn' onClick={()=> navigate('/orderpage',{ state: {
        cartItems: cartItems,
        totalPrice: totalPrice,
        totalQuantity: totalQuantity
      }})}>
 Order Now
</Button>


</div>
</div>
</>
)}
</div>

</div>

  );
};


export default Cart2;




