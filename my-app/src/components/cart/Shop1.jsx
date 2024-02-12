import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import "./Shop1.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { cartscontext } from "./ShopRoute";

function Shop1() {
  const [like, setlike] = useState({});
  const [
    cart,
    setCart,
    total,
    settotal,
    products,
    setProducts,
    drop,
    setdrop,
    search,
    setsearch,
    wish,
    setwish,
  ] = useContext(cartscontext);
  console.log(cart);

  const navigate = useNavigate();

  // const addToWish=(product)=>{
  //   setwish([...wish,product])

  // }
  const addToWish = (product) => {
    setwish([...wish, product]);
    setlike((prevLikes) => ({ ...prevLikes, [product.id]: true })); // Update like status for the specific product
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    settotal((prevTotal) => prevTotal + product.price);
    navigate("/cart");
  };

  return (
    <div>
      <br />
      <br />
      <div>
        <h2 id="explore" className="head">
          Smartphones
        </h2>
        <div id="card">
          {products
            .filter((product) => product.category === "smartphones")
            .map((product) => (
              <div key={product.id}>
                <center key={product.id}>
                  <Card id="maincard" style={{ width: "10rem" }}>
                    <Card.Img
                      id="cardimage"
                      variant="top"
                      src={product.images[1]}
                    />
                    <Card.Body>
                      <Card.Title id="title">{product.title}</Card.Title>
                      <p>Price : {product.price}/-</p>
                      <div style={{ display: "flex" }}>
                        <Button
                          id="buttonadd"
                          onClick={() => addToCart(product)}
                          variant="primary"
                        >
                          Add To Cart
                        </Button>
                        <p onClick={() => addToWish(product)}>
                          {like[product.id] ? (
                            <FaHeart id="like" />
                          ) : (
                            <FaRegHeart id="like" />
                          )}
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </center>
              </div>
            ))}
        </div>
      </div>
      <div>
        <h2 className="head">Laptops</h2>
        <div id="card">
          {products
            .filter((product) => product.category === "laptops")
            .map((product) => (
              <div key={product.id}>
                <center key={product.id}>
                  <Card id="maincard" style={{ width: "10rem" }}>
                    <Card.Img
                      id="cardimage"
                      variant="top"
                      src={product.images[0]}
                    />
                    <Card.Body>
                      <Card.Title id="title">{product.title}</Card.Title>
                      <p>Price : {product.price}/-</p>
                      <div style={{ display: "flex" }}>
                        <Button
                          id="buttonadd"
                          onClick={() => addToCart(product)}
                          variant="primary"
                        >
                          Add To Cart
                        </Button>
                        <p onClick={() => addToWish(product)}>
                          {like[product.id] ? (
                            <FaHeart id="like" />
                          ) : (
                            <FaRegHeart id="like" />
                          )}
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </center>
              </div>
            ))}
        </div>
      </div>
      <div>
        <h2 className="head">Perfumes</h2>
        <div id="card">
          {products
            .filter((product) => product.category === "fragrances")
            .map((product) => (
              <div key={product.id}>
                <center key={product.id}>
                  <Card id="maincard" style={{ width: "10rem" }}>
                    <Card.Img
                      id="cardimage"
                      variant="top"
                      src={product.images[0]}
                    />
                    <Card.Body>
                      <Card.Title id="title">{product.title}</Card.Title>
                      <p>Price : {product.price}/-</p>
                      <div style={{ display: "flex" }}>
                        <Button
                          id="buttonadd"
                          onClick={() => addToCart(product)}
                          variant="primary"
                        >
                          Add To Cart
                        </Button>
                        <p onClick={() => addToWish(product)}>
                          {like[product.id] ? (
                            <FaHeart id="like" />
                          ) : (
                            <FaRegHeart id="like" />
                          )}
                        </p>
                      </div>{" "}
                    </Card.Body>
                  </Card>
                </center>
              </div>
            ))}
        </div>
      </div>
      <div>
        <h2 className="head">Skincare</h2>
        <div id="card">
          {products
            .filter((product) => product.category === "skincare")
            .map((product) => (
              <div key={product.id}>
                <center key={product.id}>
                  <Card id="maincard" style={{ width: "10rem" }}>
                    <Card.Img
                      id="cardimage"
                      variant="top"
                      src={product.images[0]}
                    />
                    <Card.Body>
                      <Card.Title id="title">{product.title}</Card.Title>
                      <p>Price : {product.price}/-</p>
                      <div style={{ display: "flex" }}>
                        <Button
                          id="buttonadd"
                          onClick={() => addToCart(product)}
                          variant="primary"
                        >
                          Add To Cart
                        </Button>
                        <p onClick={() => addToWish(product)}>
                          {like[product.id] ? (
                            <FaHeart id="like" />
                          ) : (
                            <FaRegHeart id="like" />
                          )}
                        </p>
                      </div>{" "}
                    </Card.Body>
                  </Card>
                </center>
              </div>
            ))}
        </div>
      </div>
      <div>
        <h2 className="head">Home Decors</h2>
        <div id="card">
          {products
            .filter((product) => product.category === "home-decoration")
            .map((product) => (
              <div key={product.id}>
                <center key={product.id}>
                  <Card id="maincard" style={{ width: "10rem" }}>
                    <Card.Img
                      id="cardimage"
                      variant="top"
                      src={product.images[0]}
                    />
                    <Card.Body>
                      <Card.Title id="title">{product.title}</Card.Title>
                      <p>Price : {product.price}/-</p>
                      <div style={{ display: "flex" }}>
                        <Button
                          id="buttonadd"
                          onClick={() => addToCart(product)}
                          variant="primary"
                        >
                          Add To Cart
                        </Button>
                        <p onClick={() => addToWish(product)}>
                          {like[product.id] ? (
                            <FaHeart id="like" />
                          ) : (
                            <FaRegHeart id="like" />
                          )}
                        </p>
                      </div>{" "}
                    </Card.Body>
                  </Card>
                </center>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Shop1;
