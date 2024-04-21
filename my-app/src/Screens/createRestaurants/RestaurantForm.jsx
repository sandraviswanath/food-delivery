import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./RestaurantForm.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

const RestaurantForm = () => {
  const [formData, setFormData] = useState({
    address: "",
    phone: "",
    name: "",
    email: "",
    password: "",
    time: "",
    title: "",
    cover: "",
    subtitle: "",
    place: "",
    location:"",
    rating: "",
    fooditems: [{ foodname: "", foodimage: "", price: "", itemrating: "" }],
  });

const navigate = useNavigate();

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedMenus = [...formData.fooditems];
    updatedMenus[index][name] = value;
    setFormData({ ...formData, fooditems: updatedMenus });
  };

  const handleAddMenu = () => {
    setFormData({
      ...formData,
      fooditems: [
        ...formData.fooditems,
        { foodname: "", foodimage: "", price: "", itemrating: "" },
      ],
    });
  };

  const handleSubmit = async (e) => {
    // const storeemail=formData.email;
    e.preventDefault();
   
    try {
      // const response =await axios.post('http://localhost:5000/food')
      
      const response = await fetch("http://localhost:5000/food", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      console.log(result);
      // Reset the form after successful submission
      setFormData({
        address: "",
        phone: "",
        name: "",
        email: "",
        password: "",
        time: "",
        title: "",
        cover: "",
        subtitle: "",
        place: "",
        location:"",
        rating: "",
        fooditems: [{ foodname: "", foodimage: "", price: "", itemrating: "" }],
      });
      alert(` Restaurant details updated..!!!`);
      navigate(`/restaurantdetails/${formData.email}`);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
   
   
  };

  return (
    <div>
      
    <div className="max-width">
    <h1 className="head-title">Create Your Restaurants</h1>
      <Form onSubmit={handleSubmit} className="add-form ">
        <Form.Group className="mb-3">
          <Form.Label className="add-form-title">Restaurant details</Form.Label>
          <p>Name, address and location</p>
          <Form.Control
          className="reg-frm-cntrlr"
            type="text"
            placeholder="Restaurant name"
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
          className="reg-frm-cntrlr"
            type="text"
            placeholder="subtitle"
            name="subtitle"
            value={formData.subtitle}
            onChange={(e) =>
              setFormData({ ...formData, subtitle: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
          className="reg-frm-cntrlr"
            type="text"
            placeholder="place"
            name="place"
            value={formData.place}
            onChange={(e) =>
              setFormData({ ...formData, place: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
          className="reg-frm-cntrlr"
            type="text"
            placeholder="location"
            name="location"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
          className="reg-frm-cntrlr"
            type="text"
            placeholder="Restaurant address"
            name="address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
          className="reg-frm-cntrlr"
            type="text"
            placeholder="phone number"
            name="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="add-form-title">Restaurant owner details</Form.Label>
          <Form.Control
          className="reg-frm-cntrlr"
            type="text"
            placeholder="Restaurant owner full name(same name as you logined in)"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
          className="reg-frm-cntrlr"
            type="text"
            placeholder="Restaurant owner email(same name as you logined in)"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </Form.Group>

  


<div style={{display:'flex'}}>
  <div>
        <Form.Group className="mb-3">
          <Form.Label className="add-form-title">Restaurant timings</Form.Label>
          <Form.Control style={{width:'300px'}}
          className="reg-frm-cntrlr"
            type="text"
            placeholder="opening hours"
            name="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          />
        </Form.Group>
        </div>
        {/* <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="rating"
            name="rating"
            value={formData.rating}
            onChange={(e) =>
              setFormData({ ...formData, rating: e.target.value })
            }
          />
        </Form.Group> */}
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
            onChange={(e) =>
              setFormData({ ...formData, cover: e.target.value })
            }
          />
        </div>
        </div>

          <Button type="submit"style={{backgroundColor:'#dc3545'}} className="form-submit-butn">submit</Button>
       
      </Form>
    </div>
    </div>
  );
};

export default RestaurantForm;


