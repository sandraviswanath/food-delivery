// import React, { useState } from 'react';
// import axios from 'axios';

// const Forgotpassword = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         password: ''
//     });
//     const [message, setMessage] = useState('');

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const userId = ''; // Replace with the user's ID
//         try {
//             const response = await axios.put(`/updateuser/${userId}`, formData);
//             if (response.status === 200) {
//                 setMessage('User updated successfully');
//             } else {
//                 setMessage(response.data.error || 'Failed to update user');
//             }
//         } catch (error) {
//             console.error('Error updating user:', error);
//             setMessage('Error updating user. Please try again later.');
//         }
//     };

//     return (
//         <div>
//             <h1>User Update</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="name">Name:</label>
//                 <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} /><br /><br />
                
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /><br /><br />
                
//                 <label htmlFor="phone">Phone:</label>
//                 <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} /><br /><br />
                
//                 <label htmlFor="password">Password:</label>
//                 <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} /><br /><br />
                
//                 <button type="submit">Update</button>
//             </form>
//             {message && <div>{message}</div>}
//         </div>
//     );
// };

// export default Forgotpassword;



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
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(`http://localhost:5000/updateuser/${email}`,{ password });
            if (response.status === 200) {
                setMessage('Password updated successfully');
            } else {
                setMessage(response.data.error || 'Failed to update password');
            }
        } catch (error) {
            console.error('Error updating password:', error);
            setMessage('Error updating password. Please try again later.');
        }
    };

    return (
        <div style={{textAlign:'center',paddingTop:'70px'}}>
            <h1 style={{paddingBottom:'20px',fontSize:'28px'}}>Forgot Password</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="password">Enter email:</label>
            <input type="email" id="password" name="email" value={email} onChange={handleChangeEmail} /><br /><br />
                <label htmlFor="password">New Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={handleChange} /><br /><br />
                <button type="submit" style={{backgroundColor:'#dc3545',color:'white',border:'none',borderRadius:'5px',padding:'5px'}}>Update Password</button>
            </form>
            {message && <div>{message}</div>}
        </div>
    );
};

export default Forgotpassword;

