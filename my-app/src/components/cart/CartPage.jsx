

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdClose } from 'react-icons/io';
import { userData } from '../../App';



const CartPage = () => {
  const [first, setfirst] = useState([]);
  const [second, setsecond] = useState([]);
  const [quantity, setQuantity] = useState(1);
  // const [cart, setCart] = useState([])
  // const [total, settotal] = useState(0)
  // const [drop, setdrop] = useState('');
  // const [search, setsearch] = useState('')
  // const [wish, setwish] = useState([])
  const {email}=useParams();
  console.log(email);
const {user}=useContext(userData);


  // useEffect(()=>{
  //   const fooditems =async()=>{
     
  //    try{
  //      const foodresponse = await axios.get('http://localhost:5000/getfooditems')
               
  //    setsecond(foodresponse.data)
  //   //  console.log(second);
  //    }
  //    catch (error){
  //     console.error('Error fetching food items:', error)
       
  //    }
   
  //  };
  //  fooditems();
  // },[]);




useEffect(()=>{
  const fooditem =async()=>{
   
   try{
     const foodresponse = await axios.get(`http://localhost:5000/getcart/${email}`)
    // const foodresponse = await axios.get('http://localhost:5000/getcart')
             
   setfirst(foodresponse.data)
  //  console.log(first);
   }
   catch{
     
   }
 
 };
 fooditem();
},[email]);
console.log(first);
const newname=email;
// const prodetails=first.filter((item)=>item.email===newname)
// console.log(prodetails);
// console.log(newname);
// const newid= id;
// console.log(newid);
// const prodetails=first.filter((item)=>item.email===newname)
//     console.log(prodetails)


const filteredFoodItem=first.filter(item =>item.email===email )

console.log(filteredFoodItem)
  return (
    <div>
    <h3 className="head">Your Cart</h3>
   
    <div>
    
{/* {prodetails.length > 0 && prodetails.map((data) => (
  <div key={data?._id} style={{ display: 'flex', flexWrap: 'wrap' }}>
    {data.fooditems && data.fooditems.map((menu) => {
      if (menu && menu._id === newid) { // Add null check for menu
        return (
          <section id="product1" class="section-p1" style={{ width: '23%', marginTop: '-100px' }} key={menu._id}>
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
      }
      return null; // Return null if menu._id !== newid
    })}
  </div>
))}  */}

 {/* {filteredFoodItem.length > 0 && filteredFoodItem.map((data) => (
        <div key={data?._id} style={{ display: 'flex', flexWrap: 'wrap' }}>
          {data.fooditems.map((menu) => {
          
            if (menu && menu._id === id) {
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
            }
            return null;
          })}
        </div>
      ))}  */}





{filteredFoodItem.length > 0 && filteredFoodItem.map((data) => (
    <div key={data._id} style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.first && data.first.map((menu) => {
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


<input type="number" name="quantity" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} />



    </div>
    {/* <h2>Total Price: ${totalPrice}</h2> */}
  </div>

  );
};

export default CartPage;
