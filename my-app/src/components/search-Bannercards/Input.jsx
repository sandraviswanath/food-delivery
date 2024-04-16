import React from 'react';
import { IoSearch } from "react-icons/io5";

const Input = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} style={{ alignItems: 'center',textAlign:'center'}}>
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
        style={{ height: '50px', borderRadius: '10px 10px 10px 10px' ,width:'500px',backgroundColor:'transparent',borderColor:'white'}}
      />
     
    </form>
  );
};
export default Input;