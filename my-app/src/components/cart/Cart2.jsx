import React, { useContext, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import "./Cart.css";
import { cartscontext } from "./ShopRoute";

function Cart2() {
  const [cart, setCart, total, setTotal] = useContext(cartscontext);
  const [num, setNum] = useState(1);
    const [deletingId, setDeletingId] = useState(null); // Initialize deletingId here


  const inc = (i) => {
    const updatedCart = [...cart];
    updatedCart[i].quantity = (updatedCart[i].quantity || 1) + 1;
    setCart(updatedCart);
    // setNum((prevNum) => prevNum + 1);
    setTotal(total + cart[i].price);
  };

  const dec = (i) => {
    if (cart[i].quantity && cart[i].quantity > 0) {
      const updatedCart = [...cart];
      updatedCart[i].quantity -= 1;
      setCart(updatedCart);
      // setNum((prevNum) => prevNum - 1);
      setTotal(total - cart[i].price);
    }
  };
  return (
    <div>
      <br />
      <h3 className="head">Your Cart</h3>
      <br />
      <center>
        <Table id="tablecart" bordered>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>
                  <img height={100} src={item.images[0]} alt="no" />
                </td>
                <td id="td">
                  {item.title}
                  <br />
                  Sold By: <span id="cartdet">{item.brand}</span>
                  <br />
                  Price: <span id="cartdet">{item.price}</span>
                  <br />
                  <Button id="qtybut">
                    Qty{" "}
                    <IoMdArrowDropdown onClick={() => dec(index)} />{" "}
                    {item.quantity || 1}{" "}
                    <IoMdArrowDropup onClick={() => inc(index)} />
                  </Button>
                  <IoMdClose id="close" />
                </td>
              </tr>
            ))}
            <tr>
              <td
                id="td"
                colSpan={2}
                style={{ textAlign: "right", fontWeight: "bold" }}
              >
                Total Price: {total}
              </td>
            </tr>
          </tbody>
        </Table>
      </center>
    </div>
  );
}

export default Cart2;
