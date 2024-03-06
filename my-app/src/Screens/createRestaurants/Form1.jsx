import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'


function Form1() {

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    address: '',
    time: '',
    location: '',
    title: '',
    cover: '',
    place: '',
    rating: '',
    subtitle: '',
    foodname: '',
    foodimage: '',
    price: '',
    itemrating: ''
  });

  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    loadFoodList();
  }, []);

  const loadFoodList = async () => {
    try {
      const response = await axios.get('http://localhost:5000/foodlist');
      setFoodList(response.data);
    } catch (error) {
      console.error('Error fetching food list:', error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/food', formData);
      // Optionally, you might want to reset the form after submission
      setFormData({
        email: '',
        name: '',
        phone: '',
        address: '',
        time: '',
        location: '',
        title: '',
        cover: '',
        place: '',
        rating: '',
        subtitle: '',
        foodname: '',
        foodimage: '',
        price: '',
        itemrating: ''
      });
      loadFoodList();
      // Refresh food list after adding new item
      // const response = await axios.get('http://localhost:5000/getfood');
      // setFoodList(response.data);
    } catch (error) {
      console.error('Error creating food:', error);
    }
  };



  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/deletefood/${id}`);
      // loadFoodList(); // Refresh food list after deleting item
      setFoodList(foodList.filter(list => list._id !== id));
    } catch (error) {
      console.error('Error deleting food:', error);
    }
  };

  const handleUpdate = async (id) => {
    try {

      const requestBody = {
        email: formData.email,
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        time: formData.time,
        location: formData.location,
        title: formData.title,
        cover: formData.cover,
        place: formData.place,
        rating: formData.rating,
        subtitle: formData.subtitle,
        fooditems: [
          formData.foodname,
          formData.foodimage,
          formData.price,
          formData.itemrating
        ]
      };
  
      




      await axios.put(`http://localhost:5000/updatefood/${id}`, formData);
      setFormData({  // Reset form after successful update
        email: '',
        name: '',
        phone: '',
        address: '',
        time: '',
        location: '',
        title: '',
        cover: '',
        place: '',
        rating: '',
        subtitle: '',
        foodname: '',
        foodimage: '',
        price: '',
        itemrating: ''
      });
      loadFoodList(); // Refresh food list after updating item
    } catch (error) {
      console.error('Error updating food:', error);
    }
  };

    
  return (





<div>
      <h1>Food Management</h1>

      {/* Form for creating a new food item */}
      <h2>Create Food</h2>
      <form onSubmit={handleSubmit}>
        
        <label>Restaurant name:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required /><br /><br />
        <label>subtitle:</label>
        <input type="text" name="subtitle" value={formData.subtitle} onChange={handleChange} required /><br /><br />
        <label>place:</label>
        <input type="text" name="place" value={formData.place} onChange={handleChange} required /><br /><br />
        <label>location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} required /><br /><br />
        <label>address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required /><br /><br />
        <label>phone:</label>
        <input type="number" name="phone" value={formData.phone} onChange={handleChange} required /><br /><br />
        <h2>restaurant owner details</h2>
        <label>name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required /><br /><br />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />
        <h2>restaurant timings</h2>
        <label>time:</label>
        <input type="text" name="time" value={formData.time} onChange={handleChange} required /><br /><br />
        <div className="mb-3 w-96" style={{paddingTop:'50px',marginLeft:'20px'}}>
          <label
            htmlFor="formFile"
            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
          >
            Upload images
          </label>
          <input
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="tex"
            id="formFile"
            name="cover"
            value={formData.cover}
            onChange={handleChange}
          />
        </div>
        {/* Add other input fields for creating a food item */}

        <button type="submit">Create Food</button>
      </form>

      {/* Food List */}
      <h2>Food List</h2>
      <ul>
        {foodList.map(food => (
          <li key={food._id}>
          {food.title} 
          <button onClick={() => handleDelete(food._id)}>Delete</button>
          {/* Update functionality can be implemented similarly */}
          <button onClick={() => handleUpdate(food._id)}>Update</button>
        </li>
          
        ))}
      </ul>
    </div>






  )
}

export default Form1
