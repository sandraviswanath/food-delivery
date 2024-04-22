





// Searchview component
import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
      setProperties(response.data);
      setFilteredProperties(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePlaceFilterChange = (e) => {
    setPlaceFilter(e.target.value);
    filterPropertiesByPlace(e.target.value);
  };

  const filterPropertiesByPlace = (filterValue) => {
    const filtered = properties.filter(property =>
      property.subtitle.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterPropertiesByPlace();
  };

  return (
    // <div>
    //   <Input value={placeFilter} onChange={handlePlaceFilterChange} onSubmit={handleSubmit} />
    //   {properties.length > 0 && ( 
    //      <div className='max-width explore-section'>
    //       <div className='collection-title'></div>
    //       <div className='explore-grid'>
    //         <List properties={filteredProperties} />
    //       </div>
    //     </div>
    //   )}
    // </div>


    <div>
    <Input value={placeFilter} onChange={handlePlaceFilterChange} onSubmit={handleSubmit} />
    
          <List properties={filteredProperties} />
    
  </div>
  );
}

export default Searchview;
