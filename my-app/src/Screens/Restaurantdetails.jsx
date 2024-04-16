import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Restaurantdetails.css";
import { CiStar } from "react-icons/ci";
import { BsFillCartFill } from "react-icons/bs";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import RestaurantDisplay from "./RestaurantDisplay";

function Restaurantdetails() {
  const { name, email } = useParams();
  const [first, setfirst] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null)

  const [updatedFoodItem, setUpdatedFoodItem] = useState({
    foodname: "",
    foodimage: "",
    price: "",
    itemrating: "",
  });
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
const handleShow = (menu) =>{
  setShow(true);
  setSelectedProduct(menu);
  setUpdatedFoodItem({
    foodname: menu.foodname,
    foodimage: menu.foodimage,
    price: menu.price,
    itemrating: menu.itemrating
  })
}

  useEffect(() => {
    const handleitems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getfooditems");

        setfirst(response.data);
        //  console.log(first);
      } catch {}
    };
    handleitems();
  }, []);

  const newname = email;

  // const namedetails=first.filter((item)=>item.email===newemail)
  // // console.log(namedetails)
  // const food = namedetails[0];

  const prodetails = first.filter((item) => item.email === newname);
  console.log(prodetails);

  const handleDeleteFoodItem = async (userId, foodItemId) => {
    try {
      await axios.delete(
        `http://localhost:5000/user/${userId}/fooditems/${foodItemId}`
      );
      setFoodItems((prevState) =>
        prevState.map((user) => {
          if (user._id === userId) {
            user.fooditems = user.fooditems.filter(
              (item) => item._id !== foodItemId
            );
          }
          return user;
        })
      );
    } catch (error) {
      console.error("Error deleting food item:", error);
    }
  };

  const handleUpdateFoodItem = async (userId, foodItemId) => {
    try {
      await axios.put(
        `http://localhost:5000/updatefooditems/${userId}/${foodItemId}`,
        updatedFoodItem
      );
setShow(false);

    } catch (error) {
      console.error("Error updating food item:", error);
    }
  };

  const handleChange = (e) => {
    setUpdatedFoodItem({
      ...updatedFoodItem,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section>
      <h4
        className="section-p2"
        style={{ fontSize: "40px", marginBottom: "-70px" }}
      >
        My Restaurant
      </h4>
      <RestaurantDisplay />
      <h4 className="section-p2" style={{ marginTop: "-40px" }}>
        Food items
      </h4>
      <div style={{display:'flex'}}>
      {prodetails.length > 0 &&
        prodetails.map((data) => (
          <div key={data._id}>
            {data.fooditems &&
              data.fooditems.map(
                (menu) =>
                  menu && (
                    <section
                      id="product1"
                      // className="section-p2"
                      // style={{ width: "23%", marginTop: "-100px" }}
                      key={menu._id}
                    >
                      <div
                        className="pro-container"
                        // style={{ display: "flex" }}
                      >
                        <div className="pro" style={{ height: "310px" }}>
                          {menu.foodimage && (
                            <img
                              src={menu.foodimage}
                              // alt={menu.foodname}
                              style={{ height: "150px", width: "220px" }}
                            />
                          )}
                          <div className="res-row">
                            <div className="res-name">{menu.foodname}</div>
                            {menu.itemrating && (
                              <div className="res-rating absolute-center">
                                {menu.itemrating}{" "}
                                <CiStar
                                  className="absolute-center"
                                  style={{
                                    fontSize: "10px",
                                    marginLeft: "2px",
                                  }}
                                />
                              </div>
                            )}
                          </div>
                          <div className="des">
                            <span></span>
                            <h4>Price:{menu.price}</h4>
                          </div>
                          <div className="des" >
                            <span
                              className="remove"
                              onClick={() =>
                                handleDeleteFoodItem(data._id, menu._id)
                              }
                            >
                              Remove
                            </span>
                            {/* <span className='edit' onClick={ ()=> {handleShow(); setSelectedProduct(menu) }}>Edit</span> */}
                            <span className='edit' onClick={ ()=> {handleShow(menu) }}>Edit</span>
                          </div>
                          {/* <div>
                           
                            <input
                              type="text"
                              name="foodname"
                              value={updatedFoodItem.foodname}
                              onChange={handleChange}
                            />
                            <input
                              type="text"
                              name="foodimage"
                              value={updatedFoodItem.foodimage}
                              onChange={handleChange}
                            />
                            <input
                              type="text"
                              name="price"
                              value={updatedFoodItem.price}
                              onChange={handleChange}
                            />
                            <input
                              type="text"
                              name="itemrating"
                              value={updatedFoodItem.itemrating}
                              onChange={handleChange}
                            />
                            <button
                              onClick={() =>
                                handleUpdateFoodItem(data._id, menu._id)
                              }
                            >
                              Update
                            </button>
                          </div> */}

                          <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton></Modal.Header>
                            <Modal.Body>
                              <Form >
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicemail"
                                >
                                  <Form.Label>foodname</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="foodname"
                                    // value={updatedFoodItem.foodname || selectedProduct?.foodname}
                                    value={updatedFoodItem.foodname}
                                    defaultValue={selectedProduct?.foodname}
                                    onChange={handleChange}
                                    required
                              
                                    style={{
                                      fontSize: "14px",
                                      color: "#707070b5",
                                    }}
                                  />
                                </Form.Group>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicemail"
                                >
                                  <Form.Label>image</Form.Label>
                                  <Form.Control
                                   type="text"
                                   name="foodimage"
                                   value={updatedFoodItem.foodimage}
                                  defaultValue={selectedProduct?.foodimage}
                                   onChange={handleChange}
                                    required
                                    style={{
                                      fontSize: "14px",
                                      color: "#707070b5",
                                    }}
                                  />
                                </Form.Group>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicemail"
                                >
                                  <Form.Label>price</Form.Label>
                                  <Form.Control
                                  type="text"
                                  name="price"
                                  // value={updatedFoodItem.price || selectedProduct?.price}
                                  value={updatedFoodItem.price}
                                  defaultValue={selectedProduct?.price}
                                  onChange={handleChange}
                                    required
                                    style={{
                                      fontSize: "14px",
                                      color: "#707070b5",
                                    }}
                                  />
                                </Form.Group>
                                
                                <Button
                                   onClick={() =>
                                    handleUpdateFoodItem(data._id, menu._id)
                                  }
                                  style={{
                                    backgroundColor: "#ef5e4e",
                                    border: "none",
                                  }}
                                >
                                  Update
                                </Button>
                              </Form>
                            </Modal.Body>
                          </Modal>
                        </div>
                      </div>
                    </section>
                  )
              )}
          </div>
        ))}
        </div>
    </section>
  );
}

export default Restaurantdetails;
