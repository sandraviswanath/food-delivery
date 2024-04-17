import React from 'react';
import { Link } from 'react-router-dom';
import { CiLocationOn, CiHeart, CiStar } from "react-icons/ci";

const List = ({ properties }) => {
  return (
    // <div className="gallery">
    //   {properties.map(display => (
    //     <div>
    //       <Link to={`/detailed/${display.email}`} style={{textDecoration:'none'}}>
    //         <div key={display.id} className="image-item">
    //           <img src={display.cover} alt={data.title} />
    //           <p>{display.title}</p>
    //           <p style={{ color: '#707070' }}></p>
    //           <p style={{ color: 'black' }}>
    //             {display.price} <br></br>
    //             {data.subtitle}
    //           </p>
    //           <div style={{ display: 'flex' }}>
    //             <p style={{ color: '#707070' }}><CiLocationOn /></p>
    //             <p style={{ color: 'red', marginLeft: '20%', fontSize: '18px' }}><CiHeart /></p>
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //   ))}
    // </div>



<div style={{marginTop:'2%',marginLeft:'2%',marginRight:'2%'}}> 
{/* <h2>Explore Restaurants</h2> */}
<div className="gallery" style={{marginTop:'2%',marginLeft:'2%',marginRight:'2%'}}>

{properties && properties.map(display => (

  <div>
   
   <Link to={`/detailed/${display.email}`}style={{textDecoration:'none'}}>
  

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

    
// {/* <div style={{display:'flex'}}>
//     {properties.map(display => (
//     <section id="product1" style={{width:'23%'}}>
  
    
//     <div className=" pro-container" >
//        <Link to={`/detailed/${display.email}`} style={{textDecoration:'none'}}>
//         <div className="pro"style={{height:'310px'}}>
//             <img src={display.cover} alt={display.title} style={{height:'150px',width:'220px'}}/>
//             <div className='res-row'>
//             <div className='res-name'>{display.title}</div>
           
//             {display.rating && (
//              <div className='res-rating absolute-center'>{display.rating} <CiStar className='absolute-center'style={{fontSize:'10px',marginLeft:'2px'}} />
//              </div>)}
             
            
//              </div>
//              <div className="des">
//              <span>{display.subtitle}</span>
//                 <h4>{display.place}</h4>
//             </div>
            
    
//         </div>
//         </Link> 
//     </div>
    
//     </section>
   
//      ))}
//       </div> */}
  );
};

export default List;