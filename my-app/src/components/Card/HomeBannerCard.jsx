import React, { useEffect, useState } from 'react'
import { CiStar } from 'react-icons/ci'
import './HomeCard.css'
import { Card, Row } from 'react-bootstrap'
import { BsFillCartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import axios from 'axios';

function HomeBannerCard() {
  
  const [first, setFirst] = useState([])
 const [second, setsecond] = useState([])

  useEffect(() => {
      const handleItems = async () => {
        try {
          const response = await axios.get('http://localhost:5000/foodlist');
          setFirst(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      handleItems();
    }, []);

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
  return (
    
    


//     <section id="product1" style={{width:'23%'}}>
// {/* <h2>featured products</h2>
// <p>Summer Collection New Modern Design</p> */}
// <div className=" pro-container" >
//    <Link to={`/homedetails/${display.email}`} style={{textDecoration:'none'}}>
//     <div className="pro"style={{height:'310px'}}>
//         <img src={display.cover} alt={display.title} style={{height:'150px',width:'220px'}}/>
//         <div className='res-row'>
//         <div className='res-name'>{display.title}</div>
       
//         {display.rating && (
//          <div className='res-rating absolute-center'>{display.rating} <CiStar className='absolute-center'style={{fontSize:'10px',marginLeft:'2px'}} />
//          </div>)}
//          </div>
//          <div className="des">
//          <span>{display.subtitle}</span>
//             <h4>{display.place}</h4>
//         </div>
       

//     </div>
//     </Link> 
// </div>
// </section>



 
<div style={{marginTop:'2%',marginLeft:'2%',marginRight:'2%'}}> 
<h2>Explore Restaurants</h2>
<div className="gallery" style={{marginTop:'2%',marginLeft:'2%',marginRight:'2%'}}>

 {first.map(display => (
  
  <div>
   
    

   <Link to={`/homedetails/${display.email}`} style={{textDecoration:'none'}}>
  

  <div key={display.id} className="image-item">
   
    <img src={display.cover} alt={display.title}/>
    <p style={{color:'black'}}>{display.title}</p>
    
<p style={{color:'#707070'}}>
{display.price} <br></br>
{display.subtitle}

</p>

<p  style={{color:'#707070'}}><CiLocationOn />{display.place}</p>


  </div>
  </Link>
  
  </div>
))} 

</div>
</div>      


  )
}

export default HomeBannerCard
