import axios from 'axios';
import React, { useEffect, useState } from 'react';


import Input from './Input';
import List from './List';

function Searchview() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [placeFilter, setPlaceFilter] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/foodlist');
      setProperties(response.data); // Assuming the API returns an array of properties
      setFilteredProperties(response.data); // Initialize filtered properties with all properties
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePlaceFilterChange = (e) => {
    setPlaceFilter(e.target.value);
  };

  const filterPropertiesByPlace = () => {
    if (!placeFilter) {
      setFilteredProperties(properties); // If no filter, show all properties
    } else {
      const filtered = properties.filter(property =>
        property.subtitle.toLowerCase().includes(placeFilter.toLowerCase())
      );
      setFilteredProperties(filtered);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterPropertiesByPlace();
  };

  return (
    <div>
      <Input value={placeFilter} onChange={handlePlaceFilterChange} onSubmit={handleSubmit} />
      <List properties={filteredProperties} />
    </div>
  );
}

export default Searchview;