



import React, { useContext, useState } from 'react';
import axios from 'axios';
import { userData } from '../../App';




const Forgotpassword = () => { // Assuming userId is passed as props or retrieved from some context
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const {user,setUser} = useContext(userData);
   


    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChange = (e) => {
        // setPassword(e.target.value);
        const trimmedPassword = e.target.value.trim();
        setPassword(trimmedPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          
            const response = await axios.patch(`http://localhost:5000/updateuser/${email}`,{ password});
            if (response.status === 200) {
                setMessage('Password updated successfully');
            } else {
                setMessage(response.data.error || 'Failed to update password');
            }
        } catch (error) {
           
            setMessage('Error updating password. Please try again later.');
        }
    };

    return (
        <div style={{textAlign:'center',paddingTop:'70px'}}>
            <h1 style={{paddingBottom:'20px',fontSize:'28px'}}>Forgot Password</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="password">Enter email:</label>
            <input type="email" id="email" name="email" value={email} onChange={handleChangeEmail} /><br /><br />
                <label htmlFor="password">New Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={handleChange} /><br /><br />
                <button type="submit" style={{backgroundColor:'#dc3545',color:'white',border:'none',borderRadius:'5px',padding:'5px'}}>Update Password</button>
            </form>
            {message && <div>{message}</div>}
        </div>
    );
};

export default Forgotpassword;

