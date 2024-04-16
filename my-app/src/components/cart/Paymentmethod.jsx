import React, { useState } from 'react';
import { Button, Col, Form, Modal } from 'react-bootstrap';

const Paymentmethod = ({ onSelect }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [show, setShow] = useState(false);
  const [upiid, setUpiid] = useState('');

  const handleChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSelect(paymentMethod);
  };

  const handleUpiidChange = (e) => {
    setUpiid(e.target.value);
  };

  const handleModalClose = () => {
    setShow(false);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    onSelect(paymentMethod + ': UPI ID - ' + upiid);
    setShow(false);
  };

  return (
    <div style={{paddingTop:'20px'}}>
      <h2 className='headof'>Payment Method</h2>
      <form onSubmit={handleSubmit}>
        {/* <div>
          <input 
            type="radio" 
            id="credit_card" 
            value="credit_card" 
            checked={paymentMethod === 'credit_card'} 
            onChange={handleChange} 
          />
          <label htmlFor="credit_card">Credit Card</label>
        </div> */}
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
        <Button variant="primary" onClick={() => setShow(true)}>
          Online payment
        </Button>
        <Modal show={show} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Enter UPI ID</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleModalSubmit}>
              <Form.Group className="mb-3" controlId="formBasicupiid">
                <Form.Label>UPI ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your UPI ID"
                  value={upiid}
                  onChange={handleUpiidChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </form>
    </div>
  );
};

export default Paymentmethod;
