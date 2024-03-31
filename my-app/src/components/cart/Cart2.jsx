import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { userData } from '../../App';

const Cart2 = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const {email}=useParams();
  // console.log(email);
const {user}=useContext(userData);

  // useEffect(() => {
  //   const fetchCartItems = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:5000/getcart/${user.email}`);
  //       // const response = await axios.get('http://localhost:5000/getcart');
  //       setCartItems(response.data);
  //     } catch (error) {
  //       console.error('Error fetching cart items:', error);
  //     }
  //   };

  //   fetchCartItems();
  // }, []);



  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getcart/${user.email}`);
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
        setError('Error fetching cart items. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [user.email]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log('cartItems:', cartItems);
 
  return (
    <div>
      <h1>Cart</h1>
      <ul>
      {cartItems.length > 0 && cartItems.map((data) => (
    <div key={data._id} style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.products && data.products.map((menu) => {
            return (
                <section id="product1" className="section-p1" style={{ width: '23%', marginTop: '-100px' }} key={menu._id}>
                    <div className="pro-container" style={{ display: 'flex' }}>
                        <div className="pro" style={{ height: '310px' }}>
                            {menu.foodimage && <img src={menu.foodimage} alt={menu.foodname} style={{ height: '150px', width: '220px' }} />}
                            <div className='res-row'>
                                <div className='res-name'>{menu.foodname}</div>
                            </div>
                            <div className="des">
                                <span></span>
                                <h4>{menu.price}</h4>
                            </div>
                        </div>
                    </div>
                </section>
            );
        })}
    </div>
))}
        
      
      </ul>
    </div>
  );
};

export default Cart2;
