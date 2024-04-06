import React, { useState } from 'react';
import { Button, Col, Form, Modal } from 'react-bootstrap';


const Paymentmethod = ({ onSelect }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [show, setShow] = useState(false);
  const [upiid, setUpiid] = useState(false);
  const handleChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSelect(paymentMethod);
  };
  const handleUpiid = (e) =>{
    setUpiid(e.target.value)
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h2>Payment Method</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="radio" 
            id="credit_card" 
            value="credit_card" 
            checked={paymentMethod === 'credit_card'} 
            onChange={handleChange} 
            onClick={handleShow}
          />
          <label htmlFor="credit_card">Online payment</label>
        </div>
        <div>
          <input 
            type="radio" 
            id="debit_card" 
            value="debit_card" 
            checked={paymentMethod === 'debit_card'} 
            onChange={handleChange} 
          />
          <label htmlFor="debit_card">Cash on Delivery</label>
        </div>
        {/* <div>
          <input 
            type="radio" 
            id="paypal" 
            value="paypal" 
            checked={paymentMethod === 'paypal'} 
            onChange={handleChange} 
          />
          <label htmlFor="paypal">PayPal</label>
        </div> */}
        <button type="submit">Submit</button>
      </form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
<Form onSubmit={handleSubmit} >
    <Form.Group className="mb-3" controlId="formBasicemail">
      <Form.Label>UPI ID</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your UPI ID"
      value={upiid}
      onChange={handleUpiid}
      required
      style={{fontSize: '14px',color:'#707070b5'}}
      />
    </Form.Group>

    

    <Button 
    type="submit" style={{backgroundColor:'#ef5e4e',border:'none'}}  >
    Pay
    </Button>
  </Form>
       
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Paymentmethod;
