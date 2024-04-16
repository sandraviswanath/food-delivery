import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { userData } from '../../App';
import { Button, Table } from 'react-bootstrap';

import './WishList.css'




const WishList = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  
  // const {email}=useParams();
  // console.log(email);
const {user}=useContext(userData);
console.log(user)
const navigate = useNavigate();


//   const cartitems= localStorage.getItem('cartitems') ? JSON.parse(localStorage.getItem('cartitems')) :[]

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {

        if (!user) {
          // Redirect to login page with a message
          navigate('/log', { state: { message: 'Please log in to view your wishlist' } });
          return;
        }

        const response = await axios.get(`http://localhost:5000/getwishlist/${user.email}`);
        const products = response.data.products.map(product=>({
          ...product,
          quantity: product.quantity ||1 // Set default quantity to 1 if it's missing
        }));
const updatedWishlistItems = wishlistItems.map(item =>{
  const existingIndex = products.findIndex(product=>product._id === item._id);
  if (existingIndex !== -1) {
    return{...item,quantity:products[existingIndex].quantity};
    }
   return item;
  });
  const newProducts =products.filter(product => !wishlistItems.some(item => item._id === product._id));

const mergedWishlistItems = [...updatedWishlistItems,...newProducts];


        setWishlistItems(mergedWishlistItems);

      
      } catch (error) {
        console.error('Error fetching wishlist items:', error);
        setError('Error fetching wishlist items. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

  //   fetchCartItems();
  // }, [user.email]);
  if (user && user.email) { // Check if user and user.email are not null before calling fetchCartItems
    fetchWishlistItems();
  }
}, [user]);




  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/deletewishlist/${id}/${user.email}`);
      // After successful deletion on the server, update the cart items displayed in the UI
      const updatedCartItems = wishlistItems.filter(item => item._id !== id);
      setWishlistItems(updatedCartItems);
      
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  
  const handleAddToCart = async (product) => {

    try {
      const response = await axios.post('http://localhost:5000/createcart', {
        product, 
        email : user.email, 
       
      });
      console.log('Item added to cart:', response.data);
      setAddedToCart(true);
      navigate(`/cart2/${user?.email}`);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
    
  };
 
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log('wishlist Items:', wishlistItems);
  

  // const showMessage = () => {
  //   setMessage('Your Order is placed!');
    
  //   // Hide the message after 3 seconds
  //   setTimeout(() => {
  //     setMessage('');
  //   }, 9000);
    
  // };
 
  
  return (

<div>
<h1 style={{padding:'25px'}}>Wish List</h1>
<ul style={{display:'flex',paddingTop:'40px'}}>
  {wishlistItems.map(product => (
    <div key={product._id} style={{ display: 'flex', flexWrap: 'wrap' }}>
      <section id="product1" className="section-p1" style={{ width: '23%', marginTop: '-100px' }} key={product.id}>
        <div className="pro-container" style={{ display: 'flex' }}>
          <div className="pro" style={{ height: '310px' }}>
            <img src={product.foodimage} alt={product.foodname} style={{ height: '150px', width: '220px' }} />
            <div className='res-row'>
              <div className='res-name'>{product.foodname}</div>
            </div>
            <div className="des">
              <span></span>
              <h4>price:{product.price}</h4>

        
              
            </div>
            {/* <button onClick={()=>handleDelete(product._id)}>remove</button> */}
            <div>
            <Button className='wish-remove' onClick={() => handleDelete(product._id)}>Remove</Button>
            <Button className='wish-addcart' onClick={() => handleAddToCart(product)}>addToCart</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  ))}
</ul>


      {/* {message && <p>{message}</p>}  */}
</div>



  );
};


export default WishList;
