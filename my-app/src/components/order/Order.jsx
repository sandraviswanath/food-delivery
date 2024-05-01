// import React, { useState, useEffect, useContext} from 'react';
// import axios from 'axios';
// import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
// import { userData } from '../../App';
// import { Button, Table } from 'react-bootstrap';

// // import './Cart.css'




// const Order = () => {
//   const [orderedItems, setOrderedItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
 
  
//   // const {email}=useParams();
//   // console.log(email);
// const {user}=useContext(userData);
// const navigate = useNavigate();


// //   const cartitems= localStorage.getItem('cartitems') ? JSON.parse(localStorage.getItem('cartitems')) :[]

//   useEffect(() => {
//     const fetchOrderedItems = async () => {
//       try {

//         if (!user) {
//           // Redirect to login page with a message
//           navigate('/log', { state: { message: 'Please log in to view your wishlist' } });
//           return;
//         }

//         const response = await axios.get(`http://localhost:5000/getorder/${user.email}`);
//         const products = response.data.map(product=>({
//           ...product,
//           quantity: product.quantity ||1 // Set default quantity to 1 if it's missing
//         }));
// // const updatedOrderedItems = orderedItems.map(item =>{
// //   const existingIndex = products.findIndex(product=>product._id === item._id);
// //   if (existingIndex !== -1) {
// //     return{...item,quantity:products[existingIndex].quantity};
// //     }
// //    return item;
// //   });
// //   const newProducts =products.filter(product => !orderedItems.some(item => item._id === product._id));

// // const mergedOrderedItems = [...updatedOrderedItems,...newProducts];


// setOrderedItems(products);

      
//       } catch (error) {
//         console.error('Error fetching ordered items:', error);
//         setError('Error fetching ordered items. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//   //   fetchCartItems();
//   // }, [user.email]);
//   if (user && user.email) { // Check if user and user.email are not null before calling fetchCartItems
//     fetchOrderedItems();
//   }
// }, [user]);




 
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }
//   console.log('ordered Items:', orderedItems);
  

 
  
//   return (

// <div>
// <h1>Wish List</h1>
// <ul>
//   {orderedItems.map(product => (
//     <div key={product._id} style={{ display: 'flex', flexWrap: 'wrap' }}>
//       <section id="product1" className="section-p1" style={{ width: '23%', marginTop: '-100px' }} key={product.id}>
//         <div className="pro-container" style={{ display: 'flex' }}>
//           <div className="pro" style={{ height: '310px' }}>
//             <img src={product.foodimage} alt={product.foodname} style={{ height: '150px', width: '220px' }} />
//             <div className='res-row'>
//               <div className='res-name'>{product.foodname}</div>
//             </div>
//             <div className="des">
//               <span></span>
//               <h4>price:{product.price}</h4>

        
              
//             </div>
         
         
//           </div>
//         </div>
//       </section>
//     </div>
//   ))}
// </ul>


//       {/* {message && <p>{message}</p>}  */}
// </div>



//   );
// };


// export default Order;


import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userData } from '../../App';

const Order = () => {
  const [orderedItems, setOrderedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(userData);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrderedItems = async () => {
      try {
        if (!user) {
          navigate('/log', { state: { message: 'Please log in to view your wishlist' } });
          return;
        }
        const response = await axios.get(`http://localhost:5000/getorder/${user.email}`);
        setOrderedItems(response.data);
       
      } catch (error) {
        console.error('Error fetching ordered items:', error);
        setError('Error fetching ordered items. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (user && user.email) {
      fetchOrderedItems();
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Ordered Items</h1>
      <ul>
        {orderedItems.map(product => (
          <div key={product._id}>
           
        
            
            {/* {product.cartItems.map(cartitem =>(
              <div>{cartitem.foodname}</div>
            ))} */}
            {/* <img src={product} alt={product.name} style={{ height: '150px', width: '220px' }} /> */}
            <div className='res-row'>
              <div className='res-name'>{product.name}</div>
            </div>
            <div className="des">
              <span>Quantity: {product.quantity}</span>
              <h4>Price: {product.price}</h4>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Order;
