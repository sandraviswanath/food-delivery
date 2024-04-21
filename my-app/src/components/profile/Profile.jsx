import React, { useContext, useEffect } from 'react';
import { userData } from '../../App';
import Axios from 'axios';
import './Profile.css';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

function Profile() {
    const { user, setUser } = useContext(userData);

    useEffect(() => {
        const fetchData = async () => {
            if (user) { // Check if user exists
                try {
                    const response = await Axios.get(`http://localhost:5000/getsignup/${user.email}`);
                    setUser(response.data); // Assuming response.data is a single user object
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            }
        };
        fetchData();
    }, [user]); // Include user in the dependency array

    return (
        <div>
          


<Container style={{backgroundColor:'#F6F7FB',alignItems:'center',marginTop:'40px'}}>
{user && (
      // 
      <Row className="justify-content-md-center" style={{paddingTop:'10%',paddingBottom:'10%'}}>
        {/* <Col style={{width:'50%'}}> */}
        <Col xs lg="2">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTls3RFQ1C3s-TXEmjOtvdfDeL4Izr5R0puSw&s' style={{borderRadius:'50%',height:'100%'}}></img>
          </Col>
        {/* <Col style={{width:'50%'}}> */}
        <Col md="auto" style={{marginLeft:'6%',paddingTop:'2%'}}>
        <h2>{user.name}</h2>
        
        <p style={{fontSize:'14px',color:'#707070'}}><span style={{color:'black'}}>  {user.email}</span><br></br>
         <span style={{color:'black'}}>   {user.phone}</span> <br></br>
       
        </p>
        <Link to={`/cart2/${setUser.email}`} style={{textDecoration:'none'}}> <button style={{backgroundColor:'white',color:'red',border:'1px solid red',borderRadius:'50%',marginRight:'7px',marginTop:'5px',height:'40px',width:'110px'}}>cart</button></Link>

       <Link to={`/wishlist/${setUser.email}`} style={{textDecoration:'none'}} ><button style={{backgroundColor:'white',color:'red',border:'1px solid red',borderRadius:'50%',marginRight:'7px',marginTop:'5px',height:'40px',width:'155px'}}>Wishlist</button></Link>
       <Link to={`/order/${setUser.email}`} style={{textDecoration:'none'}} ><button style={{backgroundColor:'white',color:'red',border:'1px solid red',borderRadius:'50%',marginRight:'7px',marginTop:'5px',height:'40px',width:'155px'}}>order</button></Link>
        </Col>
      </Row>
      
      )}
      </Container>
        </div>
    );
}

export default Profile;
