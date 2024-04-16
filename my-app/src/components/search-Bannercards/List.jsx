import React from 'react';
import { Link } from 'react-router-dom';
import { CiLocationOn, CiHeart, CiStar } from "react-icons/ci";

const List = ({ properties }) => {
  return (
    // <div className="gallery">
    //   {properties.map(data => (
    //     <div>
    //       <Link to='/2' style={{ textDecoration: 'none' }}>
    //         <div key={data.id} className="image-item">
    //           <img src={data.cover} alt={data.title} />
    //           <p>{data.title}</p>
    //           <p style={{ color: '#707070' }}>{data.type} , {data.sell}</p>
    //           <p style={{ color: 'black' }}>
    //             {data.regularPrice} <br></br>
    //             {data.description}
    //           </p>
    //           <div style={{ display: 'flex' }}>
    //             <p style={{ color: '#707070' }}><CiLocationOn />{data.address}</p>
    //             <p style={{ color: 'red', marginLeft: '20%', fontSize: '18px' }}><CiHeart /></p>
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //   ))}
    // </div>
<div style={{display:'flex'}}>
    {properties.map(display => (
    <section id="product1" style={{width:'23%'}}>
    {/* <h2>featured products</h2>
    <p>Summer Collection New Modern Design</p> */}
    
    <div className=" pro-container" >
       <Link to={`/detailed/${display.email}`} style={{textDecoration:'none'}}>
        <div className="pro"style={{height:'310px'}}>
            <img src={display.cover} alt={display.title} style={{height:'150px',width:'220px'}}/>
            <div className='res-row'>
            <div className='res-name'>{display.title}</div>
           
            {display.rating && (
             <div className='res-rating absolute-center'>{display.rating} <CiStar className='absolute-center'style={{fontSize:'10px',marginLeft:'2px'}} />
             </div>)}
             
            
             </div>
             <div className="des">
             <span>{display.subtitle}</span>
                <h4>{display.place}</h4>
            </div>
            {/* <a href="#"><BsFillCartFill className='cart'/></a> */}
            {/* <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            <a href="#"><i className='cart'>{display.time}</i></a> */}
    
        </div>
        </Link> 
    </div>
    
    </section>
   
     ))}
      </div>
  );
};

export default List;