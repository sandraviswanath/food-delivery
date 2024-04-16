import React, { useContext, useEffect } from 'react';
import { userData } from '../../App';
import Axios from 'axios';
import './Profile.css';
import { Link } from 'react-router-dom';

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
            {user && ( // Check if user exists before rendering
                <div className='profile-div'>
                    <h1 className='User-name'>{user.name}</h1>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <div className='my-account'>
                    <div className='my-cart'><Link to={`/cart2/${setUser.email}`} style={{textDecoration:'none'}}>
                       Cart
                       </Link>
                    </div>
                    <div className='my-cart'><Link to={`/wishlist/${setUser.email}`} style={{textDecoration:'none'}} > Wishlisted Product</Link></div>
                    {/* <div className='my-cart'><Link to={`/order/${setUser.email}`} style={{textDecoration:'none'}}> Orders</Link></div> */}
                    </div>
                </div>
            )} 
        </div>
    );
}

export default Profile;
